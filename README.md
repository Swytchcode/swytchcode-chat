# Swytchcode Chat Plugin

A React component for chat functionality.

## Installation

```bash
# Using yarn
yarn add swytchcode-chat

# Using npm
npm install swytchcode-chat
```

## Usage

```tsx
import { SwytchcodeChat } from 'swytchcode-chat';

export default function MyComponent() {
  return (
    <SwytchcodeChat
      initialMessage="Hello! How can I help you today?"
      placeholder="Type your message..."
      theme="light"
    />
  );
}
```

## Development

To link this package for local development:

1. In this project:
```bash
yarn link
```

2. In your project:
```bash
yarn link swytchcode-chat
```

## Requirements

This package requires the following peer dependencies:
- React 16.8.0 or higher
- React DOM 16.8.0 or higher
- Next.js 13.0.0 or higher

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
SWYTCHCODE_API_KEY=
```
