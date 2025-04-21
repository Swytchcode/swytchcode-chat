#!/bin/bash

# Create a new Next.js project
npx create-next-app@15.3.1 nextjs-ai-chat --typescript --eslint --tailwind --app --import-alias "@/*"

# Navigate to the project directory
cd nextjs-ai-chat

# Install AI SDK dependencies
npm install ai @ai-sdk/openai @ai-sdk/react

# Install Prism.js for syntax highlighting
npm install prismjs
npm install --save-dev @types/prismjs

# Create necessary directories
mkdir -p app/api/chat
mkdir -p app/examples
mkdir -p types

# Create .env.local file
echo "OPENAI_API_KEY=your_openai_api_key" > .env.local

# Make the setup script executable
chmod +x setup.sh

echo "Project setup complete! Now copy the component files from the code blocks."
echo "Run 'npm run dev' to start the development server."
