"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useChat } from "@ai-sdk/react"

export interface ChatProps {
  apiUrl?: string
  initialMessage?: string
  placeholder?: string
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  buttonText?: string
  buttonIcon?: React.ReactNode
  theme?: "light" | "dark"
}

export const Chat: React.FC<ChatProps> = ({
  apiUrl = "/api/chat",
  initialMessage = "Hello! How can I help you today?",
  placeholder = "Type your message...",
  position = "bottom-right",
  buttonText = "Chat",
  buttonIcon = null,
  theme = "light",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: apiUrl,
    initialMessages: initialMessage ? [{ id: "1", role: "assistant", content: initialMessage }] : [],
  })

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  }

  const themeClasses = {
    light: {
      button: "bg-blue-500 hover:bg-blue-600 text-white",
      chat: "bg-white text-gray-800",
      userMessage: "bg-blue-500 text-white",
      aiMessage: "bg-gray-200 text-gray-800",
      input: "bg-white border-gray-300 text-gray-800",
    },
    dark: {
      button: "bg-gray-700 hover:bg-gray-600 text-white",
      chat: "bg-gray-800 text-gray-100",
      userMessage: "bg-gray-600 text-white",
      aiMessage: "bg-gray-700 text-gray-100",
      input: "bg-gray-700 border-gray-600 text-gray-100",
    },
  }

  const toggleChat = () => setIsOpen(!isOpen)

  return (
    <div className="fixed z-50">
      {isOpen && (
        <div
          className={`fixed ${positionClasses[position]} w-80 sm:w-96 h-96 rounded-lg shadow-lg overflow-hidden flex flex-col ${themeClasses[theme].chat}`}
        >
          <div className="p-3 border-b flex justify-between items-center">
            <h3 className="font-medium">Chat Assistant</h3>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700" aria-label="Close chat">
              ✕
            </button>
          </div>

          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.role === "user"
                    ? `${themeClasses[theme].userMessage} ml-auto`
                    : `${themeClasses[theme].aiMessage} mr-auto`
                }`}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className={`max-w-[80%] p-3 rounded-lg ${themeClasses[theme].aiMessage} mr-auto`}>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={`flex-1 px-3 py-2 rounded border ${themeClasses[theme].input}`}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={`px-4 py-2 rounded ${themeClasses[theme].button} disabled:opacity-50`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={toggleChat}
        className={`fixed ${positionClasses[position]} p-3 rounded-full shadow-lg ${themeClasses[theme].button}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {buttonIcon || buttonText}
      </button>
    </div>
  )
}
