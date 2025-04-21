import Link from "next/link"

export default function ExamplesPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">AI Chat Plugin Examples</h1>

        <div className="mb-6">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to Home
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Embedded Chat</h2>
            <p className="mb-4">To embed the chat interface directly in your page:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              {`import { Chat } from '@/components/chat';

export default function Page() {
  return (
    <div>
      <h1>My Page</h1>
      <Chat 
        apiUrl="/api/chat"
        initialMessage="Hello! How can I help you?"
        theme="light"
      />
    </div>
  );
}`}
            </pre>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Customization</h2>
            <p className="mb-4">You can customize the appearance of the embedded chat:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              {`<Chat 
  apiUrl="/api/chat"
  initialMessage="Hello! How can I assist you today?"
  placeholder="Ask me anything..."
  theme="dark"
  className="max-w-2xl mx-auto"
/>`}
            </pre>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">API Implementation</h2>
            <p className="mb-4">The API route that handles chat requests:</p>
            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
              {`// app/api/chat/route.ts
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const result = streamText({
    model: openai('gpt-4o'),
    messages,
    system: "You are a helpful assistant.",
  });
  
  return result.toDataStreamResponse();
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
