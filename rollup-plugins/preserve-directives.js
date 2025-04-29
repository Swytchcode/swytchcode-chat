// Custom plugin to preserve "use client" directives
export default function preserveDirectives() {
  return {
    name: 'preserve-directives',
    transform(code, id) {
      if (id.endsWith('.tsx') || id.endsWith('.jsx')) {
        const useClientMatch = code.match(/^["']use client["'];?\r?\n/);
        if (useClientMatch) {
          const directive = useClientMatch[0];
          const restOfCode = code.slice(directive.length);
          return {
            code: directive + restOfCode,
            map: null
          };
        }
      }
      return null;
    }
  };
} 