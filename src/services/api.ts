import { SWYTCHCODE_BASE_URL } from '../Constants';

export const fetchLists = async (type: 'workflows' | 'methods') => {
  console.log('Fetching lists for type:', type);
  const response = await fetch(`${SWYTCHCODE_BASE_URL}/chat-list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_SWYTCHCODE_API_KEY || ''
    },
    body: JSON.stringify({ param: type })
  });
  const data = await response.json();
  console.log('Lists response:', data);
  return data;
};

export const fetchCode = async (type: 'code' | 'workflow', prompt: string, language: string) => {
  console.log('Fetching code:', { type, prompt, language });
  const response = await fetch(`${SWYTCHCODE_BASE_URL}/chat-fetch-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_SWYTCHCODE_API_KEY || ''
    },
    body: JSON.stringify({ type, prompt, language })
  });
  const data = await response.json();
  console.log('Code response:', data);
  return data;
};

export const chatWorkflowRequest = async (messages: { content: string }[]) => {
  const endpoint = `${SWYTCHCODE_BASE_URL}/chat-workflow-request`;
  const payload = {
    workflow: messages[messages.length - 1].content,
    code_context: "",
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_SWYTCHCODE_API_KEY || ''
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  return atob(data.data);
}; 