import { Chat } from "@/components/chat"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 md:p-4">
      <div className="w-full h-[calc(100vh-2rem)] max-w-7xl">
        <Chat
          initialMessage="Hello! I'm your AI assistant. How can I help you today? Ask me to show you some code examples!"
          placeholder="Ask me anything..."
          theme="light"
          className="h-full"
          // Example of custom colors (uncomment to use)
          // headerBgColor="#1a1a1a"
          // headerTextColor="#ffffff"
          // panelBgColor="#0f0f0f"
          // panelTextColor="#f0f0f0"
          // logoHeight={32}
        />
      </div>
    </main>
  )
}
