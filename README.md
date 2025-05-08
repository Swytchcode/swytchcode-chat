# Swytchcode Chat Library

A powerful, customizable chat library that brings AI-driven code generation and assistance to your apps and docs—enabling your users to interact with your APIs directly and bypass traditional documentation.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm version](https://badge.fury.io/js/swytchcode.svg)
[![Check compilation](https://github.com/Swytchcode/swytchcode-chat/actions/workflows/compile.yml/badge.svg)](https://github.com/Swytchcode/swytchcode-chat/actions/workflows/compile.yml)

## Watch Swytchcode in action

![Swytchcode Chat Demo](Swytchcode-chat-intro.gif)

## Features

- 🤖 AI-powered code generation and assistance
- 💬 Interactive chat interface
- 🎨 Customizable UI with theme support
- 🔌 Easy integration with any web application
- 📦 Available as UMD and ES modules
- 🌐 Works in both modern and legacy environments
- 🔍 Automatic language detection for code blocks
- 📝 Customizable input placeholder

## Installation

### NPM

```bash
npm install swytchcode
```

### Yarn

```bash
yarn add swytchcode
```

### CDN

```html
<script src="https://unpkg.com/swytchcode/dist/swytchcode.umd.js"></script>
```

## Getting an API Key

Before using the library, you'll need an API key:

1. Visit [https://app.swytchcode.com](https://app.swytchcode.com)
2. Sign up or log in to your account
3. Go to Settings > Chat Key
4. Generate a new API key

## Usage

The `apiKey` prop is required for the library to function. You can pass it directly or use environment variables depending on your setup.

### ES Projects

```jsx
// pages/index.tsx or app/page.tsx
import { Swytchcode } from 'swytchcode';

export default function Home() {
  return (
    <Swytchcode
      apiKey="YOUR_API_KEY"
      borderColor="#3b82f6"
      height="600px"
      width="100%"
      initialMessage="Welcome to the Swytchcode Chat Library!"
    />
  );
}
```


### Vanilla JavaScript/HTML

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/swytchcode/dist/swytchcode.umd.js"></script>
</head>
<body>
  <div id="chat-library"></div>
  <script>
    const root = ReactDOM.createRoot(document.getElementById('chat-library'));
    root.render(
      React.createElement(Swytchcode, {
        apiKey="YOUR_API_KEY"
        borderColor: '#3b82f6',
        height: '600px',
        width: '100%',
        initialMessage: 'Welcome to the Swytchcode Chat Library!'
      })
    );
  </script>
</body>
</html>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiKey` | string | undefined | Your Swytchcode API key (required) |
| `borderColor` | string | '#e5e7eb' | Color of the library border |
| `height` | string \| number | '80vh' | Height of the library |
| `width` | string \| number | '100%' | Width of the library |
| `initialMessage` | string | 'Hello! How can I help you today?' | Initial message displayed in the chat |
| `sendButtonColor` | string | '#2563eb' | Color of the send button |
| `userBubbleColor` | string | '#3b82f6' | Color of user message bubbles |
| `promptValue` | string | 'Ask me anything...' | Placeholder text for the input field |
| `highlightTheme` | string | 'twilight' | Theme for code syntax highlighting |

## Available Prism Themes

The `highlightTheme` prop supports the following themes:

| Theme | Description |
|-------|-------------|
| `default` | Clean and minimal theme with a light background |
| `dark` | Dark theme with high contrast |
| `funky` | Vibrant theme with a dark background and colorful syntax |
| `okaidia` | Dark theme with a warm color palette |
| `twilight` | Dark theme with a cool color palette (default) |
| `coy` | Light theme with subtle colors |
| `solarizedlight` | Light theme based on the Solarized color scheme |
| `tomorrow` | Dark theme with a modern color palette |
| `atom-dark` | Dark theme inspired by Atom editor |
| `vs` | Light theme inspired by Visual Studio |
| `xonokai` | Dark theme with a warm, earthy color palette |
| `duotone-dark` | Dark theme with a duotone color scheme |
| `duotone-light` | Light theme with a duotone color scheme |
| `duotone-sea` | Dark theme with a sea-inspired duotone scheme |
| `duotone-space` | Dark theme with a space-inspired duotone scheme |
| `duotone-earth` | Dark theme with an earth-inspired duotone scheme |
| `duotone-forest` | Dark theme with a forest-inspired duotone scheme |
| `duotone-rose` | Dark theme with a rose-inspired duotone scheme |

Example usage:
```jsx
<Swytchcode
  apiKey="YOUR_API_KEY"
  highlightTheme="dark"  // Choose any theme from the list above
  // ... other props
/>
```

## Code Block Support

The library automatically detects and supports code blocks in various programming languages. When the API returns code, it will:

1. Detect the programming language from the response
2. Apply appropriate syntax highlighting
3. Display the code in a formatted block with:
   - Language indicator
   - Copy button
   - Syntax highlighting
   - Scrollable container

Supported languages:
- TypeScript
- Javascript
- Python
- Java
- Go
- C++
- C#
- Ruby
- PHP
- Swift
- Kotlin
- Rust
- Ruby
- C

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/swytchcode/swytchcode.git
cd swytchcode
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

### Building

To build the project:

```bash
npm run build
# or
yarn build
```

This will generate the following files in the `dist` directory:
- `swytchcode.umd.js` - For browser/vanilla JS usage
- `swytchcode.es.js` - For ES modules usage

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/invite/zuSXSv5GWs)

For support, please:
- Join our [Discord community](https://discord.com/invite/zuSXSv5GWs)
- Open an issue in the GitHub repository

## Acknowledgments

- Thanks to all our contributors
- Built with [React](https://reactjs.org/)
- Styled with [Stitches](https://stitches.dev/)
