export interface SwytchcodeProps {
  initialMessage?: string;
  promptValue?: string;
  sendButtonColor?: string;
  userBubbleColor?: string;
  height?: string | number;
  width?: string | number;
  borderColor?: string;
}

export interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export interface ListItem {
  name: string;
} 