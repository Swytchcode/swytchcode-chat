import { SwytchcodeChat } from "@/components/chat"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 md:p-4">
      <div className="w-full h-[calc(100vh-2rem)] max-w-7xl">
        <SwytchcodeChat
          initialMessage="Hello! I'm your AI assistant. How can I help you today? Ask me to show you some code examples!"
          placeholder="Ask me anything..."
          theme="light"
          className="w-full h-full"
          headerBgColor="#ffffff"
          headerTextColor="#000000"
          panelBgColor="#f5f5f5"
          panelTextColor="#000000"
          logoHeight={40}
        />
      </div>
    </main>
  )
}
