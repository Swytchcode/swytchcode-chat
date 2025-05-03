# Swytchcode Chat Plugin

A React library for chat functionality interacting with Swytchcode. 

## Installation

```bash
# Using yarn
yarn add swytchcode

# Using npm
npm install swytchcode
```

## Usage

```tsx
import { Swytchcode } from 'swytchcode';

export default function MyComponent() {
  return (
    <Swytchcode
        initialMessage="Welcome to Swytchcode! Ask me anything."
        promptValue="Type your question..."
        sendButtonColor="#1a73e8"
        userBubbleColor="#1976d2"
        height="600px"
        width="1400px"
      />
  );
}
```



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


## Development

To link this package for local development:

1. In this project:
```bash
yarn link
```

2. In your project:
```bash
yarn link swytchcode
```
