export interface SwytchcodeProps {
  initialMessage?: string;
  promptValue?: string;
  sendButtonColor?: string;
  userBubbleColor?: string;
  height?: string;
  width?: string;
  borderColor?: string;
  apiKey?: string;
  highlightTheme?: 'default' | 'dark' | 'funky' | 'okaidia' | 'twilight' | 'coy' | 'solarizedlight' | 'tomorrow' | 'atom-dark' | 'vs' | 'xonokai' | 'duotone-dark' | 'duotone-light' | 'duotone-sea' | 'duotone-space' | 'duotone-earth' | 'duotone-forest' | 'duotone-rose';
} 

export interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export interface ListItem {
  name: string;
} 