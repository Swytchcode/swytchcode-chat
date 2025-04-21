import type React from "react"
declare module "@ai-sdk/react" {
  export interface ChatMessage {
    id: string
    role: "user" | "assistant" | "system"
    content: string
  }

  export interface UseChatOptions {
    api?: string
    initialMessages?: ChatMessage[]
    headers?: Record<string, string>
    body?: Record<string, unknown>
    onResponse?: (response: Response) => void | Promise<void>
    onFinish?: (message: ChatMessage) => void | Promise<void>
    onError?: (error: Error) => void | Promise<void>
  }

  export interface UseChatHelpers {
    messages: ChatMessage[]
    input: string
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
    isLoading: boolean
    error: Error | null
    append: (message: ChatMessage | Omit<ChatMessage, "id">) => Promise<void>
    reload: () => Promise<void>
    stop: () => void
    setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>
    setInput: React.Dispatch<React.SetStateAction<string>>
  }

  export function useChat(options?: UseChatOptions): UseChatHelpers
}
