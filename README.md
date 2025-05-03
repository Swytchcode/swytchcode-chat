# Swytchcode Chat Plugin

A powerful and customizable chat plugin that integrates AI-powered code generation and assistance into your applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/swytchcode.svg)
[![Check compilation](https://github.com/Swytchcode/swytchcode-chat/actions/workflows/compile.yml/badge.svg)](https://github.com/Swytchcode/swytchcode-chat/actions/workflows/compile.yml)

## Features

- 🤖 AI-powered code generation and assistance
- 💬 Interactive chat interface
- 🎨 Customizable UI with theme support
- 🔌 Easy integration with any web application
- 📦 Available as UMD and ES modules
- 🌐 Works in both modern and legacy environments

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

## Usage

### React

```jsx
import { Swytchcode } from 'swytchcode';

function App() {
  return (
    <Swytchcode
      borderColor="#3b82f6"
      height="600px"
      width="100%"
      initialMessage="Welcome to the Swytchcode Chat Plugin!"
    />
  );
}
```

### Vanilla JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/swytchcode/dist/swytchcode.umd.js"></script>
</head>
<body>
  <div id="chat-plugin"></div>
  <script>
    const root = ReactDOM.createRoot(document.getElementById('chat-plugin'));
    root.render(
      React.createElement(Swytchcode, {
        borderColor: '#3b82f6',
        height: '600px',
        width: '100%',
        initialMessage: 'Welcome to the Swytchcode Chat Plugin!'
      })
    );
  </script>
</body>
</html>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `borderColor` | string | '#e5e7eb' | Color of the plugin border |
| `height` | string \| number | '80vh' | Height of the plugin |
| `width` | string \| number | '100%' | Width of the plugin |
| `initialMessage` | string | 'Hello! How can I help you today?' | Initial message displayed in the chat |
| `sendButtonColor` | string | '#2563eb' | Color of the send button |
| `userBubbleColor` | string | '#3b82f6' | Color of user message bubbles |

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

For support, please open an issue in the GitHub repository or contact us at support@swytchcode.com.

## Acknowledgments

- Thanks to all our contributors
- Built with [React](https://reactjs.org/)
- Styled with [Stitches](https://stitches.dev/)
