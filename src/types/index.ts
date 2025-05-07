export interface SwytchcodeProps {
  initialMessage?: string;
  promptValue?: string;
  sendButtonColor?: string;
  userBubbleColor?: string;
  height?: string;
  width?: string;
  borderColor?: string;
  apiKey?: string;
} 

export interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export interface ListItem {
  name: string;
} 