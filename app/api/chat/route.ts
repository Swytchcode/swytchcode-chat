import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Use the AI SDK to generate a streaming response
    const result = streamText({
      model: openai("gpt-4o"),
      messages,
      system: `You are a helpful AI assistant. Provide clear, concise, and accurate responses to user queries.
      
      When sharing code examples:
      1. Always use triple backticks with the language name to format code blocks (e.g. \`\`\`javascript)
      2. Provide examples in the most appropriate language for the question
      3. Include helpful comments in the code
      4. Ensure the code is properly indented and formatted`,
    })

    // Return the streaming response
    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response(JSON.stringify({ error: "Failed to process chat request" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
