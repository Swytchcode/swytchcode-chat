# Contributing to Swytchcode Chat Plugin

Thank you for your interest in contributing to Swytchcode Chat Plugin! This document provides guidelines and steps for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in the [issues](https://github.com/swytchcode/swytchcode-chat/issues) section
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (browser, OS, etc.)

### Suggesting Features

1. Check if the feature has already been suggested in the [issues](https://github.com/swytchcode/swytchcode-chat/issues) section
2. If not, create a new issue with:
   - A clear, descriptive title
   - Detailed description of the feature
   - Use cases and benefits
   - Screenshots or mockups if applicable

### Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-fix-name
   ```
3. Make your changes
4. Ensure your code follows our style guidelines
5. Test your changes
6. Commit your changes with a descriptive message
7. Push to your fork
8. Create a Pull Request

## Development Setup

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/your-username/swytchcode-chat.git
   cd swytchcode-chat
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

## Code Style Guidelines

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Write meaningful commit messages
- Include tests for new features
- Update documentation as needed

### TypeScript Guidelines

- Use strict type checking
- Avoid `any` type
- Use interfaces for object shapes
- Use type aliases for complex types
- Document complex types with JSDoc comments

### React Guidelines

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Follow React best practices
- Use meaningful component and variable names

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Update tests when modifying existing features
- Use meaningful test descriptions

## Documentation

- Update README.md for significant changes
- Document new features
- Keep code comments up to date
- Use JSDoc for complex functions

## Commit Message Format

Use the following format for commit messages:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- feat: new feature
- fix: bug fix
- docs: documentation changes
- style: code style changes
- refactor: code refactoring
- test: test changes
- chore: maintenance tasks

## Review Process

1. Pull requests will be reviewed by maintainers
2. Feedback will be provided if changes are needed
3. Once approved, your PR will be merged

## Questions?

If you have any questions, feel free to:
- Open an issue
- Join our [Discord community](https://discord.com/invite/zuSXSv5GWs)
- Contact the maintainers

Thank you for contributing to Swytchcode Chat Plugin! 