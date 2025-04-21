# Next.js AI Chat Plugin with Code Highlighting

A Next.js 15.3.1 project with an integrated AI chat plugin using the AI SDK, featuring syntax highlighting for code blocks in multiple programming languages.

## Features

- Embedded chat interface similar to v0
- Code syntax highlighting for multiple programming languages
- Streaming responses
- Customizable UI
- TypeScript support
- Next.js 15.3.1 App Router

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
OPENAI_API_KEY=your_openai_api_key
```

## Project Structure

- `app/` - Next.js App Router pages and API routes
- `components/` - Chat component
- `types/` - TypeScript type definitions

## How to Use

### Embedded Chat

The Chat component can be imported and used in any page:

```tsx
import { Chat } from '@/components/chat';

export default function Page() {
  return (
    <div>
      <h1>My Page</h1>
      <Chat 
        apiUrl="/api/chat"
        initialMessage="Hello! How can I help you today?"
        theme="light"
      />
    </div>
  );
}
```

## Code Highlighting

The chat component automatically detects code blocks in the AI's responses and applies syntax highlighting based on the language specified. Supported languages include:

- JavaScript/TypeScript
- JSX/TSX
- Python
- Java
- C/C++
- C#
- Ruby
- Go
- Rust
- Bash
- SQL
- JSON
- Markdown
- YAML
- PHP
- CSS

Code blocks should be formatted with triple backticks and an optional language identifier:

```
```javascript
const greeting = "Hello, world!";
console.log(greeting);
```
```

## API Reference

### Chat Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| apiUrl | string | '/api/chat' | The URL of the chat API endpoint |
| initialMessage | string | 'Hello! How can I help you today?' | The initial message from the assistant |
| placeholder | string | 'Type your message...' | Placeholder text for the input field |
| theme | 'light' \| 'dark' | 'light' | Color theme of the chat widget |
| className | string | '' | Additional CSS classes to apply to the container |

## Learn More

To learn more about Next.js and the AI SDK, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [AI SDK Documentation](https://sdk.vercel.ai/) - learn about the AI SDK.
- [Prism.js Documentation](https://prismjs.com/) - learn about the syntax highlighting library.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).
```
