import * as React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';
import 'prismjs/components/prism-typescript.min.js';
import { PROGRAMMING_LANGUAGES } from "./Constants";
import { SwytchcodeProps, Message, ListItem } from './types';
import { SearchableDropdown } from './components/SearchableDropdown';
import { fetchLists, fetchCode, chatWorkflowRequest } from './services/api';
import {
  AppBg, AppContainer, WorkflowsPanel, PanelContent, MainContent,
  ChatHeader, BackArrow, MessagesContainer, InputForm, MessageInput,
  SendBtn, Throbber, GlobalStyles, Tabs, Tab, Label, FormGroup,
  SearchInput, WorkflowsList, WorkflowItem
} from './components/styled';

export const Swytchcode: React.FC<SwytchcodeProps> = ({
  initialMessage = "Hello! I'm your AI assistant. How can I help you today? Ask me to show you some code examples!",
  promptValue = '',
  sendButtonColor = '#2563eb',
  userBubbleColor = '#3b82f6',
  height = '80vh',
  width = '100%',
  borderColor = '#e5e7eb',
}) => {
  const [activeTab, setActiveTab] = React.useState('methods');
  const [selectedLanguage, setSelectedLanguage] = React.useState('');
  const [selectedMethodLanguage, setSelectedMethodLanguage] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [methodSearch, setMethodSearch] = React.useState('');
  const [messages, setMessages] = React.useState<Message[]>([
    { id: 1, role: 'assistant', content: initialMessage }
  ]);
  const [input, setInput] = React.useState('');
  const [showLeftPanel, setShowLeftPanel] = React.useState(true);
  const [copiedId, setCopiedId] = React.useState<number | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [methodsList, setMethodsList] = React.useState<ListItem[]>([]);
  const [workflowsList, setWorkflowsList] = React.useState<ListItem[]>([]);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const messagesContainerRef = React.useRef<HTMLDivElement>(null);

  const languages = PROGRAMMING_LANGUAGES.map(lang => lang.value);
  const workflows = workflowsList.map(w => w.name);
  const methods = methodsList.map(m => m.name);

  // Check for missing API key
  const apiKey = import.meta.env.VITE_SWYTCHCODE_API_KEY;
  const isApiKeyMissing = !apiKey || apiKey.trim() === '';

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching initial data...');
        const workflowsData = await fetchLists('workflows');
        console.log('Workflows data:', workflowsData);
        setWorkflowsList(workflowsData.data || []);

        const methodsData = await fetchLists('methods');
        console.log('Methods data:', methodsData);
        setMethodsList(methodsData.data || []);
      } catch (error) {
        console.error('Error fetching lists:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage: Message = { id: Date.now(), role: 'user', content: input };
    const assistantId = userMessage.id + 1;
    setMessages(prev => [
      ...prev,
      userMessage,
      { id: assistantId, role: 'assistant', content: '' }
    ]);
    setInput('');
    setIsLoading(true);

    try {
      const text = await chatWorkflowRequest([...messages, userMessage]);
      const languageMatch = text.match(/^```(\w+)/);
      const codeContent = text.replace(/^```\w+\n/, '').replace(/\n```$/, '');
      const language = languageMatch ? languageMatch[1] : 'typescript';
      
      setMessages(prev =>
        prev.map(msg =>
          msg.id === assistantId && msg.role === 'assistant'
            ? { ...msg, content: `\`\`\`${language}\n${codeContent}\n\`\`\`` }
            : msg
        )
      );
    } catch (error) {
      console.error('Error in chat workflow request:', error);
      setMessages(prev =>
        prev.map(msg =>
          msg.id === assistantId && msg.role === 'assistant'
            ? { ...msg, content: 'Sorry, there was an error processing your request.' }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleWorkflowOrMethodClick = async (text: string) => {
    const userMessage: Message = { id: Date.now(), role: 'user', content: text };
    const assistantId = userMessage.id + 1;
    setMessages(prev => [...prev, userMessage]);
    scrollToBottom();

    const type = activeTab === 'methods' ? 'code' : 'workflow';
    const language = activeTab === 'methods' 
      ? (selectedMethodLanguage || 'node.js')
      : (selectedLanguage || 'node.js');
    
    setIsLoading(true);
    try {
      const data = await fetchCode(type, text, language);
      console.log("dATA",data);
      if (data.data?.code) {
        const decodedCode = atob(data.data.code);
        const languageMatch = decodedCode.match(/^```(\w+)/);
        const codeContent = decodedCode.replace(/^```\w+\n/, '').replace(/\n```$/, '');
        
        setMessages(prev => [
          ...prev,
          { 
            id: assistantId, 
            role: 'assistant', 
            content: `\`\`\`${languageMatch ? languageMatch[1] : 'typescript'}\n${codeContent}\n\`\`\`` 
          }
        ]);
        scrollToBottom();
      }
    } catch (error) {
      console.error('Error fetching code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  function renderMessage(msg: Message) {
    // Detect code block with language
    const codeBlockMatch = msg.content.match(/^```(\w+)\n([\s\S]*?)```$/);
    if (codeBlockMatch) {
      const language = codeBlockMatch[1];
      const code = codeBlockMatch[2].replace(/\u00A0/g, ' ');
      // Use Prism to highlight
      const highlighted = Prism.highlight(
        code,
        Prism.languages[language] || Prism.languages.javascript,
        language
      );
      return (
        <div style={{
          position: 'relative',
          background: '#23272f',
          color: '#f8f8f2',
          borderRadius: 8,
          padding: '1rem',
          margin: '1rem 0',
          overflowX: 'auto'
        }}>
          <span style={{
            position: 'absolute',
            top: 8,
            left: 16,
            color: '#fff',
            background: '#3b3b3b',
            fontSize: '0.75em',
            padding: '0.1em 0.7em',
            borderRadius: 4,
            zIndex: 2,
            fontWeight: 600,
            letterSpacing: '0.04em',
            pointerEvents: 'none'
          }}>
            {language}
          </span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(code);
              setCopiedId(msg.id);
              setTimeout(() => setCopiedId(null), 1200);
            }}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: '#23272f',
              border: '1px solid #444',
              borderRadius: 4,
              padding: '0.1rem 0.5rem',
              fontSize: '0.8em',
              cursor: 'pointer',
              zIndex: 2,
              outline: 'none',
              boxShadow: 'none',
              color: '#f8f8f2',
              transition: 'background 0.2s, border-color 0.2s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#2d333b';
              e.currentTarget.style.borderColor = '#555';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#23272f';
              e.currentTarget.style.borderColor = '#444';
            }}
          >
            {copiedId === msg.id ? 'Copied!' : 'Copy'}
          </button>
          <div style={{ height: 32 }} />
          <hr style={{ border: 0, borderTop: '1px solid #444', margin: '0 0 1rem 0' }} />
          <pre className={`language-${language}`} style={{ margin: 0 }}>
            <code
              className={`language-${language}`}
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </pre>
        </div>
      );
    }
    // Fallback for non-code messages
    return (
      <div style={{
        display: 'inline-block',
        background: msg.role === 'user' ? userBubbleColor : '#f3f4f6',
        color: msg.role === 'user' ? '#fff' : '#1f2937',
        borderRadius: 8,
        padding: '1rem',
        maxWidth: '80%',
        margin: '0.5rem 0'
      }}>
        <div style={{ margin: 0, padding: 0 }}>
          {msg.content}
        </div>
      </div>
    );
  }

  return (
    <div style={{ height, width }} className="swytchcode-root">
      <GlobalStyles />
      <AppBg>
        <AppContainer css={{ borderColor: borderColor }}>
          {/* Hide left panel if API key is missing */}
          {!isApiKeyMissing && showLeftPanel && (
            <WorkflowsPanel>
              <div style={{ opacity: showLeftPanel ? 1 : 0, transition: 'opacity 0.3s' }}>
                <PanelContent>
                  <Tabs>
                    <Tab
                      className={activeTab === 'methods' ? 'active' : ''}
                      onClick={() => setActiveTab('methods')}
                    >
                      Methods
                    </Tab>
                    <Tab
                      className={activeTab === 'workflows' ? 'active' : ''}
                      onClick={() => setActiveTab('workflows')}
                    >
                      Workflows
                    </Tab>
                  </Tabs>
                  {activeTab === 'workflows' && (
                    <>
                      <FormGroup>
                        <SearchableDropdown
                          options={languages}
                          value={selectedLanguage}
                          onChange={setSelectedLanguage}
                          placeholder="Select language"
                        />
                      </FormGroup>
                      <FormGroup>
                        <SearchInput
                          placeholder="Search workflows..."
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                        />
                      </FormGroup>
                      <Label style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                        Most used workflows
                      </Label>
                      <WorkflowsList>
                        {workflows
                          .filter(wf => wf.toLowerCase().includes(searchQuery.toLowerCase()))
                          .map(wf => (
                            <WorkflowItem 
                              key={wf} 
                              onClick={() => handleWorkflowOrMethodClick(wf)}
                              style={{ cursor: 'pointer' }}
                            >
                              {wf}
                            </WorkflowItem>
                          ))}
                      </WorkflowsList>
                    </>
                  )}
                  {activeTab === 'methods' && (
                    <>
                      <FormGroup>
                        <SearchableDropdown
                          options={languages}
                          value={selectedMethodLanguage}
                          onChange={setSelectedMethodLanguage}
                          placeholder="Select language"
                        />
                      </FormGroup>
                      <FormGroup>
                        <SearchInput
                          placeholder="Search methods..."
                          value={methodSearch}
                          onChange={e => setMethodSearch(e.target.value)}
                        />
                      </FormGroup>
                      <Label style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                        Most used methods
                      </Label>
                      <WorkflowsList>
                        {methods
                          .filter(m => m.toLowerCase().includes(methodSearch.toLowerCase()))
                          .map(m => (
                            <WorkflowItem 
                              key={m} 
                              onClick={() => handleWorkflowOrMethodClick(m)}
                              style={{ cursor: 'pointer' }}
                            >
                              {m}
                            </WorkflowItem>
                          ))}
                      </WorkflowsList>
                    </>
                  )}
                </PanelContent>
              </div>
            </WorkflowsPanel>
          )}
          <MainContent>
            <ChatHeader>
              <BackArrow aria-label="Toggle" onClick={() => setShowLeftPanel(v => !v)}>
                {showLeftPanel ? (
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
                ) : (
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
                )}
              </BackArrow>
              <span style={{ marginLeft: '2.5rem', fontWeight: 600, fontSize: '1.08rem', whiteSpace: 'nowrap' }}>Chat with AI Assistant</span>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <a
                  href="https://swytchcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#000',
                    fontWeight: 200,
                    fontSize: '0.98em',
                    gap: '0.5rem',
                  }}
                >
                  Powered by <svg width="22" height="22" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M316.68,117.53l.02.04c-17.67-7.78-37.19-12.14-57.74-12.14-79.2,0-143.41,64.21-143.41,143.41,0,43.11,19.05,81.75,49.16,108.04l-13.69,17.58c-35.33-30.38-57.73-75.37-57.73-125.62,0-91.49,74.17-165.66,165.66-165.66,38,0,72.99,12.83,100.95,34.35h-43.23Z" fill="#f4941f"/>
                    <path d="M359.76,350.79c-25.9,25.61-61.49,41.45-100.79,41.45-13.77,0-27.07-1.98-39.68-5.6l-21.62,16.09c18.97,7.56,39.63,11.76,61.3,11.76,45.45,0,86.61-18.32,116.54-47.95l-15.75-15.75Z" fill="#f4941f"/>
                    <polygon points="375.31 147.06 286.59 147.06 155.64 300.53 220.24 300.53 270.21 257.09 142.61 416.82 358.39 243 293.21 243 375.31 147.06" fill="#f4941f"/>
                  </svg>
                </a>
              </div>
            </ChatHeader>
            <MessagesContainer ref={messagesContainerRef}>
              {/* Show error message if API key is missing */}
              {isApiKeyMissing ? (
                <div style={{
                  background: '#fee2e2',
                  color: '#b91c1c',
                  border: '1px solid #fca5a5',
                  borderRadius: 8,
                  padding: '1.5rem',
                  margin: '2rem auto',
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  maxWidth: 500,
                }}>
                  VITE_SWYTCHCODE_API_KEY is missing. If you are the owner of this project, please generate a new key from <a href="https://app.swytchcode.com" target="_blank" rel="noopener noreferrer">https://app.swytchcode.com</a>. Read more about it in the <a href="https://docs.swytchcode.com/docs/getting-started/installation" target="_blank" rel="noopener noreferrer">documentation</a>.
                </div>
              ) : (
                <>
                  {messages.map(msg => (
                    <div key={msg.id} style={{ marginBottom: '1rem', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
                      {renderMessage(msg)}
                    </div>
                  ))}
                  {isLoading && <Throbber>Thinking...</Throbber>}
                  <div ref={messagesEndRef} />
                </>
              )}
            </MessagesContainer>
            {/* Disable input if API key is missing */}
            <InputForm onSubmit={handleSubmit}>
              <MessageInput
                placeholder={promptValue || "Ask me anything..."}
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={isApiKeyMissing}
              />
              <SendBtn type="submit" style={{ backgroundColor: sendButtonColor }} disabled={isApiKeyMissing}>Send</SendBtn>
            </InputForm>
          </MainContent>
        </AppContainer>
      </AppBg>
    </div>
  );
}; 