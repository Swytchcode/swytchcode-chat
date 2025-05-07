import { SWYTCHCODE_BASE_URL, SWYTCHCODE_STREAM_BASE_URL } from '../Constants';

let apiKey: string | undefined;

export const setApiKey = (key: string) => {
  apiKey = key;
};

const getApiKey = () => {
  return apiKey;
};

export const fetchLists = async (type: 'workflows' | 'methods') => {
  console.log("JEY", getApiKey())
  const response = await fetch(`${SWYTCHCODE_BASE_URL}/chat-list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': getApiKey() || ''
    },
    body: JSON.stringify({ param: type })
  });
  const data = await response.json();
  return data;
};

export const fetchCode = async (
  type: 'code' | 'workflow',
  prompt: string,
  language: string,
  onMessage?: (chunk: string) => void
) => {
  const response = await fetch(`${SWYTCHCODE_STREAM_BASE_URL}/chat-fetch-code`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': getApiKey() || ''
    },
    body: JSON.stringify({ type, prompt, language })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (onMessage && response.body) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let fullText = '';
    
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      
      if (value) {
        const chunk = decoder.decode(value, { stream: !done });
        fullText += chunk;
        onMessage(chunk);
      }
    }

    try {
      const data = JSON.parse(fullText);
      return data;
    } catch (e) {
      return { data: { code: btoa(fullText) } };
    }
  } else {
    const data = await response.json();
    return data;
  }
};

export const chatWorkflowRequest = async (
  messages: { content: string }[],
  onMessage?: (chunk: string) => void
) => {
  const endpoint = `${SWYTCHCODE_STREAM_BASE_URL}/chat-workflow-request`;
  const payload = {
    workflow: messages[messages.length - 1].content,
    code_context: "",
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': getApiKey() || ''
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (onMessage && response.body) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let fullText = '';
    
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      
      if (value) {
        const chunk = decoder.decode(value, { stream: !done });
        fullText += chunk;
        onMessage(chunk);
      }
    }

    try {
      const data = JSON.parse(fullText);
      return atob(data.data);
    } catch (e) {
      return fullText;
    }
  } else {
    const data = await response.json();
    return atob(data.data);
  }
}; 