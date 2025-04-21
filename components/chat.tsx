"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useChat } from "@ai-sdk/react"
import WorkflowsPanel from "./workflows-panel"

export interface ChatProps {
  apiUrl?: string
  initialMessage?: string
  placeholder?: string
  theme?: "light" | "dark"
  className?: string
}

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
    const language = match[1] || "javascript" // Default to javascript if no language is specified
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

export const Chat: React.FC<ChatProps> = ({
  apiUrl = "/api/chat",
  initialMessage = "Hello! How can I help you today?",
  placeholder = "Type your message...",
  theme = "light",
  className = "",
}) => {
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [highlightedMessages, setHighlightedMessages] = useState<Record<string, boolean>>({})
  const [isPanelOpen, setIsPanelOpen] = useState(true)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: apiUrl,
    initialMessages: initialMessage ? [{ id: "1", role: "assistant", content: initialMessage }] : [],
  })

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

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen)
  }

  const themeClasses = {
    light: {
      container: "bg-white border border-gray-200",
      header: "bg-gray-50 text-gray-800 border-b border-gray-200",
      messages: "bg-white",
      userMessage: "bg-blue-500 text-white",
      aiMessage: "bg-gray-100 text-gray-800 border border-gray-200",
      codeBlock: "bg-gray-800 text-gray-100 rounded-md overflow-x-auto",
      input: "bg-white border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-blue-500",
      sendButton: "bg-blue-500 hover:bg-blue-600 text-white",
      panel: "bg-gray-50 border-r border-gray-200",
    },
    dark: {
      container: "bg-gray-900 border border-gray-700",
      header: "bg-gray-800 text-gray-100 border-b border-gray-700",
      messages: "bg-gray-900",
      userMessage: "bg-blue-600 text-white",
      aiMessage: "bg-gray-800 text-gray-100 border border-gray-700",
      codeBlock: "bg-gray-900 text-gray-100 rounded-md overflow-x-auto",
      input: "bg-gray-800 border-gray-700 text-gray-100 focus:border-blue-500 focus:ring-blue-500",
      sendButton: "bg-blue-600 hover:bg-blue-700 text-white",
      panel: "bg-gray-800 border-r border-gray-700",
    },
  }

  return (
    <div className={`flex h-full ${className}`}>
      {/* Workflows Panel */}
      <WorkflowsPanel isOpen={isPanelOpen} theme={theme} themeClasses={themeClasses[theme]} />

      {/* Chat Interface */}
      <div className={`flex flex-col flex-grow rounded-lg overflow-hidden shadow-lg ${themeClasses[theme].container}`}>
        <div className={`p-4 ${themeClasses[theme].header} flex justify-between items-center`}>
          <div className="flex items-center">
            <button
              onClick={togglePanel}
              className="mr-3 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">powered by swytchcode</div>
        </div>

        <div
          ref={chatContainerRef}
          className={`flex-1 overflow-y-auto p-4 space-y-4 min-h-[400px] max-h-[600px] ${themeClasses[theme].messages}`}
        >
          {messages.map((message) => {
            const formattedContent = formatMessageContent(message.content)

            return (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] p-3 rounded-lg ${
                    message.role === "user" ? `${themeClasses[theme].userMessage}` : `${themeClasses[theme].aiMessage}`
                  }`}
                >
                  {formattedContent &&
                    formattedContent.map((part, index) => {
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
              onChange={handleInputChange}
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
