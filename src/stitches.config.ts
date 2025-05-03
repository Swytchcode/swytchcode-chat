import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, theme } = createStitches({
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#d4d5d9',
      background: '#fff',
      text: '#111827',
      panel: '#f3f4f6',
      border: '#e5e7eb',
    },
    radii: {
      md: '8px',
      full: '9999px',
    },
  },
}); 