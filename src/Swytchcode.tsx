import * as React from 'react';
import { styled } from './stitches.config';
import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';
import 'prismjs/components/prism-typescript.min.js';
import { SWYTCHCODE_BASE_URL, PROGRAMMING_LANGUAGES } from "./Constants";
import { SwytchcodeProps, Message, ListItem } from './types';
import { SearchableDropdown } from './components/SearchableDropdown';
import { fetchLists, fetchCode } from './services/api';
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
  const [input, setInput] = React.useState(promptValue);
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
      { id: assistantId, role: 'assistant', content: '```typescript\n' }
    ]);
    setInput('');
    setIsLoading(true);

    try {
      const data = await fetchCode('code', input, selectedMethodLanguage);
      if (data.text) {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantId && msg.role === 'assistant'
              ? { ...msg, content: '```typescript\n' + data.text + '\n```' }
              : msg
          )
        );
      }
    } catch (error) {
      console.error('Error fetching code:', error);
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
          {showLeftPanel && (
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
                  Powered by <img src="/logo_icon.png" alt="swytchcode Logo" style={{ height: 22 }} />
                </a>
              </div>
            </ChatHeader>
            <MessagesContainer ref={messagesContainerRef}>
              {messages.map(msg => (
                <div key={msg.id} style={{ marginBottom: '1rem', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
                  {renderMessage(msg)}
                </div>
              ))}
              {isLoading && <Throbber>Thinking...</Throbber>}
              <div ref={messagesEndRef} />
            </MessagesContainer>
            <InputForm onSubmit={handleSubmit}>
              <MessageInput
                placeholder="Ask me anything..."
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <SendBtn type="submit" style={{ backgroundColor: sendButtonColor }}>Send</SendBtn>
            </InputForm>
          </MainContent>
        </AppContainer>
      </AppBg>
    </div>
  );
}; 