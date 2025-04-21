# Next.js AI Chat Component Library

A React component library for adding AI chat functionality to your applications, with code syntax highlighting and a workflows panel.

## Features

- Embedded chat interface with AI integration
- Code syntax highlighting for multiple programming languages
- Workflows panel for pre-published templates
- Responsive design
- Light and dark theme support
- Powered by the AI SDK

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Publishing to npm](#publishing-to-npm)
- [Using in a React Project](#using-in-a-react-project)
- [Using via Script Tags](#using-via-script-tags)
- [API Reference](#api-reference)

## Installation

```bash
npm install swytchcode-chat
# or
yarn add swytchcode-chat
# or
pnpm add swytchcode-chat
```

## Usage

```jsx
import { Chat } from 'swytchcode-chat';

function App() {
  return (
    <div style={{ height: '600px' }}>
      <Chat 
        apiUrl="/api/chat"
        initialMessage="Hello! How can I help you today?"
        theme="light"
      />
    </div>
  );
}
```

## Publishing to npm

Follow these steps to publish the library to npm:

### 1. Prepare Your Package

First, make sure your `package.json` is properly configured:

```json
{
  "name": "swytchcode-chat",
  "version": "1.0.0",
  "description": "AI Chat Component with code highlighting and workflows panel",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "rollup -c",
    "prepublishOnly": "npm run build"
  },
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  "dependencies": {
    "@ai-sdk/react": "^1.0.0",
    "prismjs": "^1.29.0"
  },
  "devDependencies": {
    "@rollup/plugin-commonjs": "^22.0.0",
    "@rollup/plugin-node-resolve": "^13.3.0",
    "@rollup/plugin-typescript": "^8.3.2",
    "@types/prismjs": "^1.26.3",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "rollup": "^2.74.1",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    "rollup-plugin-postcss": "^4.0.2",
    "rollup-plugin-terser": "^7.0.2",
    "typescript": "^4.6.4"
  }
}
```

### 2. Create a Rollup Configuration

Create a `rollup.config.js` file:

```javascript

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
  // ESM and CommonJS builds
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extensions: ['.css'],
        minimize: true,
        extract: 'swytchcode-chat.css',
      }),
    ],
    external: ['react', 'react-dom', '@ai-sdk/react', 'prismjs'],
  },
  // UMD build for script tags
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/swytchcode-chat.umd.js',
      format: 'umd',
      name: 'AIChatComponent',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        '@ai-sdk/react': 'AiSdkReact',
        'prismjs': 'Prism',
      },
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extensions: ['.css'],
        minimize: true,
      }),
      terser(),
    ],
    external: ['react', 'react-dom', '@ai-sdk/react', 'prismjs'],
  },
];
```

### 3. Create an Entry Point

Create a `src/index.ts` file that exports your components:

```typescript
export { Chat } from './components/chat';
export type { ChatProps } from './components/chat';
export { default as WorkflowsPanel } from './components/workflows-panel';
```

### 4. Build Your Package

Run the build script:

```bash
npm run build
```

### 5. Create an npm Account

If you don't have an npm account, create one:

```bash
npm adduser
```

### 6. Publish Your Package

```bash
npm publish
```

For scoped packages (e.g., @yourname/swytchcode-chat):

```bash
npm publish --access public
```

### 7. Updating Your Package

When you make changes, update the version in `package.json` and publish again:

```bash
npm version patch # or minor or major
npm publish
```

## Using in a React Project

### 1. Install the Package

```bash
npm install swytchcode-chat
```

### 2. Set Up the API Endpoint

Create an API endpoint for the chat functionality:

```typescript
// app/api/chat/route.ts (Next.js)
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const result = streamText({
    model: openai('gpt-4o'),
    messages,
    system: "You are a helpful assistant. Provide clear, concise, and accurate responses to user queries.",
  });
  
  return result.toDataStreamResponse();
}
```

### 3. Add Required Dependencies

```bash
npm install ai @ai-sdk/openai @ai-sdk/react prismjs
```

### 4. Add Prism.js to Your Layout

```jsx
// In your layout component
import Script from 'next/script';

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js" strategy="afterInteractive" />
        {/* Add more language scripts as needed */}
      </body>
    </html>
  );
}
```

### 5. Use the Component

```jsx
import { Chat } from 'swytchcode-chat';
import 'swytchcode-chat/dist/swytchcode-chat.css';

export default function ChatPage() {
  return (
    <div style={{ height: '600px' }}>
      <Chat 
        apiUrl="/api/chat"
        initialMessage="Hello! How can I help you today?"
        theme="light"
      />
    </div>
  );
}
```

## Using via Script Tags

### 1. Include Required Scripts

```html
&lt;!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Chat Component</title>
  
  &lt;!-- React and ReactDOM -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  
  &lt;!-- AI SDK -->
  <script src="https://unpkg.com/ai@2.2.31/dist/ai.umd.js"></script>
  <script src="https://unpkg.com/@ai-sdk/react@1.0.0/dist/index.umd.js"></script>
  
  &lt;!-- Prism.js for syntax highlighting -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
  
  &lt;!-- AI Chat Component -->
  <script src="https://unpkg.com/swytchcode-chat/dist/swytchcode-chat.umd.js"></script>
  <link href="https://unpkg.com/swytchcode-chat/dist/swytchcode-chat.css" rel="stylesheet">
</head>
<body>
  <div id="chat-container" style="height: 600px;"></div>
  
  <script>
    // Initialize the chat component
    document.addEventListener('DOMContentLoaded', function() {
      const container = document.getElementById('chat-container');
      
      ReactDOM.render(
        React.createElement(AIChatComponent.Chat, {
          apiUrl: '/api/chat',
          initialMessage: 'Hello! How can I help you today?',
          theme: 'light'
        }),
        container
      );
    });
  </script>
</body>
</html>
```
