"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import WorkflowsPanel from "./workflows-panel"
import {Workflow} from "./types"
import axios from "axios";

// Function to parse message content with code blocks
const formatMessageContent = (content: string) => {


  if (!content) return null

  // Regular expression to match code blocks with optional language specification
  const codeBlockRegex = /```([a-zA-Z0-9]*)\n([\s\S]*?)```/g

  // Split the content by code blocks
  const parts = []
  let lastIndex = 0
  let match

  while ((match = codeBlockRegex.exec(content)) !== null) {
    // Add text before the code block
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        content: content.substring(lastIndex, match.index),
      })
    }

    // Add the code block with language info
    const language = match[1] || "js" // Default to javascript if no language is specified
    const code = match[2].trim()
    parts.push({
      type: "code",
      language,
      content: code,
    })

    lastIndex = match.index + match[0].length
  }

  // Add any remaining text after the last code block
  if (lastIndex < content.length) {
    parts.push({
      type: "text",
      content: content.substring(lastIndex),
    })
  }

  // If no code blocks were found, return the content as a single text part
  if (parts.length === 0) {
    parts.push({
      type: "text",
      content,
    })
  }


  return parts
}

export interface SwytchcodeChatProps {
  apiUrl?: string
  initialMessage?: string
  placeholder?: string
  theme?: "light" | "dark"
  className?: string
  headerBgColor?: string
  headerTextColor?: string
  panelBgColor?: string
  panelTextColor?: string
  logoHeight?: number
}

export const SwytchcodeChat: React.FC<SwytchcodeChatProps> = ({
  apiUrl = "/api/workflowrequest",
  initialMessage = "Hello! How can I help you today?",
  placeholder = "Type your message...",
  theme = "light",
  className = "",
  headerBgColor,
  headerTextColor,
  panelBgColor,
  panelTextColor,
  logoHeight = 40,
}) => {
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(true)
  const [messages, setMessages] = useState<Array<{ id: string; role: "user" | "assistant"; content: string }>>([
    { id: "1", role: "assistant", content: initialMessage },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [language, setLanguage] = useState("")
  const [methodsList, setMethodsList] = useState<{ [key: string]: any[] }>({});
  const [workflowList, setWorkflowList] = useState<Workflow[]>([]);
  const [highlightedMessages, setHighlightedMessages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])
  
  // Load syntax highlighting only on client side
  useEffect(() => {
    // Track which messages have been processed for highlighting
    const newHighlightedMessages = { ...highlightedMessages }
    let hasNewMessages = false

    messages.forEach((message) => {
      if (!highlightedMessages[message.id]) {
        newHighlightedMessages[message.id] = true
        hasNewMessages = true
      }
    })

    if (hasNewMessages) {
      setHighlightedMessages(newHighlightedMessages)

      // Use the globally loaded Prism
      if (typeof window !== "undefined" && (window as any).Prism) {
        setTimeout(() => {
          ;(window as any).Prism.highlightAll()
        }, 0)
      }
    }
  }, [messages, highlightedMessages])

  useEffect(() =>  {
    
    const fetchMethodsData = async ()  => {
      let methodsList: any[] = []
      let i: number = 0
      try {
        const response = await axios.post('/api/list', {type:"methods"}, {
          headers: {
            "Content-Type": "application/json"
          },
        });

        
        response.data.data.data.forEach((item:any) => {
          let key = `method_${i++}`
          methodsList.push({ id: key, name: "generateText", description: item.name })
        });

      } catch (err) {
        console.error("Error fetching:", err);
      }

      const methodsByCategory = {
        Core: methodsList
      }

      setMethodsList(methodsByCategory)
    };
  
    fetchMethodsData()

  },[])

  useEffect(() =>  {
    
    const fetchWorkflowsData = async ()  => {
      let workflowsList: Workflow[] = []
      let i: number = 0
      try {
        const response = await axios.post('/api/list', {type:"workflows"}, {
          headers: {
            "Content-Type": "application/json"
          },
        });

        
        response.data.data.data.forEach((item:any) => {
          let key = `workflow_${i++}`
          workflowsList.push({ id: key, name: "", description: item.name, category: "Most used workflows" })
        });

      } catch (err) {
        console.error("Error fetching:", err);
      }


      setWorkflowList(workflowsList)
    };
  
    fetchWorkflowsData()

  },[])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    handleNewPrompt(input)
    setInput("")
  }

  const handleNewPrompt = async (customMessage: string) => {
    const messageToSend = customMessage;
    
    if (!messageToSend.trim() || isLoading) return;

    // Add user message
    const userMessage = { id: Date.now().toString(), role: "user" as const, content: messageToSend }
    setMessages((prev) => [...prev, userMessage]);
  
 
    setIsLoading(true)

    try {
      // Call the API
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      // Get the response text
      const data = await response.json()

      // Add assistant message
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "assistant", content: data.text || "Thank you" },
      ])
    } catch (error) {
      console.error("Error sending message:", error)
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, there was an error processing your request.",
        },
      ])
    } finally {
      setIsLoading(false)
    }

  }

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }

  const themeClasses = {
    light: {
      container: "bg-white border border-gray-200",
      header: headerBgColor ? "" : "bg-gray-50 text-gray-800 border-b border-gray-200",
      messages: "bg-white",
      userMessage: "bg-blue-500 text-white",
      aiMessage: "bg-gray-100 text-gray-800 border border-gray-200",
      codeBlock: "bg-gray-800 text-gray-100 rounded-md overflow-x-auto",
      input: "bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-blue-500",
      sendButton: "bg-blue-500 hover:bg-blue-600 text-white",
      panel: panelBgColor ? "" : "bg-gray-50 border-r border-gray-200",
    },
    dark: {
      container: "bg-gray-900 border border-gray-700",
      header: headerBgColor ? "" : "bg-gray-800 text-gray-100 border-b border-gray-700",
      messages: "bg-gray-900",
      userMessage: "bg-blue-600 text-white",
      aiMessage: "bg-gray-800 text-gray-100 border border-gray-700",
      codeBlock: "bg-gray-900 text-gray-100 rounded-md overflow-x-auto",
      input: "bg-gray-800 border-gray-700 text-gray-100 focus:border-blue-500 focus:ring-blue-500",
      sendButton: "bg-blue-600 hover:bg-blue-700 text-white",
      panel: panelBgColor ? "" : "bg-gray-800 border-r border-gray-700",
    },
  }

  // Calculate logo dimensions to maintain aspect ratio
  // The original logo has a 1:1 aspect ratio
  const logoWidth = logoHeight

  return (
    <div className={`flex h-full ${className}`}>
      {/* Workflows Panel */}
      <WorkflowsPanel
        isOpen={isPanelOpen}
        theme={theme}
        themeClasses={themeClasses[theme]}
        customBgColor={panelBgColor}
        customTextColor={panelTextColor}
        methodsList={methodsList}
        workflowsList={workflowList}
        onItemSelect={(description) => {
          handleNewPrompt(description);
        }}
        onLanguageSelect={(newLanguage) => {
          console.log(newLanguage)
          setLanguage(newLanguage)
        }}
      />

      {/* Chat Interface */}
      <div className={`flex flex-col flex-grow rounded-lg overflow-hidden shadow-lg ${themeClasses[theme].container}`}>
        <div
          className={`p-4 flex justify-between items-center ${headerBgColor ? "" : themeClasses[theme].header}`}
          style={{
            backgroundColor: headerBgColor || "",
            color: headerTextColor || "",
          }}
        >
          <div className="flex items-center">
            <button
              onClick={togglePanel}
              className={`mr-3 p-1 rounded ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
              } transition-colors`}
              aria-label={isPanelOpen ? "Close workflows panel" : "Open workflows panel"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isPanelOpen ? <path d="M19 12H5M12 19l-7-7 7-7" /> : <path d="M5 12h14M12 5l7 7-7 7" />}
              </svg>
            </button>
            <h3 className="font-medium">Chat with AI Assistant</h3>
          </div>
          <a href="https://swytchcode.com" target="_blank">
          <div className="flex items-center">
            Powered by
            <div className="rounded-md overflow-hidden" style={{ height: `${logoHeight}px`, width: `${logoWidth}px` }}>
              <div
                className={`p-1 flex items-center justify-center h-full w-full`}
              >
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={logoWidth - 8} // Subtract padding
                  height={logoHeight - 8} // Subtract padding
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          </a>
        </div>

        <div
          ref={chatContainerRef}
          className={`flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px] max-h-[600px] ${themeClasses[theme].messages}`}
        >
          {messages.map((message) => {
            const formattedContent = formatMessageContent(message.content);
            
            return (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] p-3 rounded-lg ${
                    message.role === "user" ? `${themeClasses[theme].userMessage}` : `${themeClasses[theme].aiMessage}`
                  }`}
                >
                  {formattedContent &&
                    formattedContent.map((part: any, index: number) => {
                      if (part.type === "text") {
                        return (
                          <div key={index} className="whitespace-pre-wrap mb-2">
                            {part.content}
                          </div>
                        )
                      } else if (part.type === "code") {
                        return (
                          <div key={index} className={`${themeClasses[theme].codeBlock} mb-2 mt-2`}>
                            <div className="flex items-center px-4 py-2 text-xs border-b border-gray-700">
                              <span>{part.language}</span>
                            </div>
                            <pre className="p-4 overflow-x-auto">
                              <code className={`language-${part.language}`}>{part.content}</code>
                            </pre>
                          </div>
                        )
                      }
                      return null
                    })}
                </div>
              </div>
            )
          })}
          {isLoading && (
            <div className="flex justify-start">
              <div className={`max-w-[80%] p-3 rounded-lg ${themeClasses[theme].aiMessage}`}>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className={`flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${themeClasses[theme].input}`}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={`px-4 py-2 rounded-md ${themeClasses[theme].sendButton} disabled:opacity-50 transition-colors`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}