import * as React from 'react';
import { styled } from './stitches.config';
// @ts-ignore
import Prism from 'prismjs';
// @ts-ignore
import 'prismjs/themes/prism-twilight.css';
// @ts-ignore
import 'prismjs/components/prism-typescript.min.js';

// Add prop types
interface SwytchcodeProps {
  initialMessage?: string;
  promptValue?: string;
  sendButtonColor?: string;
  userBubbleColor?: string;
  height?: string | number;
  width?: string | number;
}

const AppBg = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '2rem 0',
});

const AppContainer = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 1400,
  minHeight: '80vh',
  background: 'none',
  boxShadow: 'none',
});

const WorkflowsPanel = styled('div', {
  width: 340,
  flexShrink: 0,
  overflowY: 'auto',
  backgroundColor: '$panel',
  borderRight: '1.5px solid $border',
  boxShadow: '2px 0 16px rgba(59,130,246,0.04)',
  borderRadius: '1rem 0 0 1rem',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '600px',
  position: 'relative',
});

const PanelContent = styled('div', {
  padding: '0.8rem 1.5rem 3.5rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

const MainContent = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
  borderRadius: '0 1rem 1rem 0',
  boxShadow: '0 2px 24px rgba(59,130,246,0.08)',
  minWidth: 0,
  minHeight: '600px',
  position: 'relative',
});

const ChatHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0.7rem 1.2rem 0.7rem 1.2rem',
  borderBottom: '1px solid $border',
  fontWeight: 600,
  fontSize: '1.08rem',
  position: 'relative',
  background: '#fff',
  borderTopRightRadius: '1rem',
});

const BackArrow = styled('button', {
  position: 'absolute',
  left: '2rem',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  color: '#222',
  fontSize: '1.25rem',
  outline: 'none',
  boxShadow: 'none',
  '&:focus': {
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
  },
});

const MessagesContainer = styled('div', {
  flex: 1,
  overflowY: 'auto',
  maxHeight: '60vh',
  padding: '2rem 2rem 1rem 2rem',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const InputForm = styled('form', {
  display: 'flex',
  gap: '0.5rem',
  padding: '1.25rem 2rem',
  borderTop: '1px solid $border',
  background: '#fff',
  borderBottomRightRadius: '1rem',
});

const MessageInput = styled('input', {
  flex: 1,
  padding: '0.75rem 1rem',
  border: '1px solid $border',
  borderRadius: '0.375rem',
  fontSize: '1.05rem',
});

const SendBtn = styled('button', {
  padding: '0.75rem 1.5rem',
  backgroundColor: '$primary',
  color: '#fff',
  border: 'none',
  borderRadius: '0.375rem',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '1.05rem',
  boxShadow: '0 1px 4px rgba(59,130,246,0.06)',
  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.1s',
  '&:hover': {
    backgroundColor: '#2563eb',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
  },
  '&:active': {
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
  },
});

const Throbber = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1rem',
  color: '#6b7280',
  margin: '0.5rem 0',
  maxWidth: '80%',
  alignSelf: 'flex-start',
  '&::after': {
    content: '',
    width: '1rem',
    height: '1rem',
    border: '2px solid #e5e7eb',
    borderTopColor: '#3b82f6',
    borderRightColor: '#3b82f6',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
});

const GlobalStyles = styled('style', {
  '@global': {
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
});

const Tabs = styled('div', {
  display: 'flex',
  borderBottom: '1.5px solid $border',
  marginBottom: '0.7rem',
  width: '100%',
  minHeight: 0,
});

const Tab = styled('button', {
  flex: 1,
  padding: '0.3rem 1rem 0.5rem 1rem',
  fontSize: '1.02rem',
  fontWeight: 600,
  color: '#222',
  background: 'none',
  border: 'none',
  borderBottom: '2px solid transparent',
  borderRadius: 0,
  cursor: 'pointer',
  transition: 'color 0.2s, border-bottom 0.2s',
  letterSpacing: '0.01em',
  outline: 'none',
  boxShadow: 'none',
  '&:focus': {
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
  },
  '&:active': {
    outline: 'none',
    boxShadow: 'none',
    border: 'none',
  },
  '&.active': {
    color: '$primary',
    borderBottom: '2px solid $primary',
    borderRadius: 0,
  },
});

const Label = styled('div', {
  fontWeight: 500,
  marginBottom: '0.25rem',
  color: '#444',
  fontSize: '1.01rem',
});

const FormGroup = styled('div', {
  marginBottom: '0.6rem',
  display: 'flex',
  flexDirection: 'column',
});

const SearchableDropdownContainer = styled('div', {
  position: 'relative',
  width: '100%',
});

const DropdownInput = styled('input', {
  width: '100%',
  padding: '0.5rem 1rem',
  borderRadius: 8,
  border: '1.5px solid $border',
  fontSize: '0.95rem',
  color: '#444',
  background: '#fff',
  outline: 'none',
  fontWeight: 100,
  transition: 'border 0.2s',
  textAlign: 'left',
  boxSizing: 'border-box',
  '&:focus': {
    border: '1.5px solid $primary',
  },
});

const DropdownList = styled('div', {
  position: 'absolute',
  top: '110%',
  left: 0,
  right: 0,
  background: '#fff',
  border: '0.95px solid $border',
  borderRadius: 8,
  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
  zIndex: 10,
  maxHeight: 180,
  overflowY: 'auto',
});

const DropdownItem = styled('div', {
  padding: '0.2rem 1rem',
  cursor: 'pointer',
  color: '#000',
  fontWeight: 100,
  fontSize: '0.95rem',
  '&:hover': {
    background: '$panel',
  },
});

const SearchInput = styled('input', {
  width: '100%',
  padding: '0.5rem 1rem',
  borderRadius: 8,
  border: '1.5px solid $border',
  fontSize: '0.95rem',
  color: '#444',
  background: '#fff',
  outline: 'none',
  fontWeight: 500,
  transition: 'border 0.2s',
  boxSizing: 'border-box',
  '&:focus': {
    border: '1.5px solid $primary',
  },
});

const WorkflowsList = styled('div', {
  maxHeight: '180px',
  overflowY: 'auto',
});

const WorkflowItem = styled('div', {
  fontWeight: 200,
  color: '#222',
  cursor: 'pointer',
  padding: '0.2rem',
  borderRadius: 7,
  fontSize: '0.95rem',
  transition: 'background 0.2s',
  '&:hover': {
    background: '$secondary',
    color: '#000',
  },
});

// Searchable Dropdown Component
function SearchableDropdown({ options, value, onChange, placeholder }: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const filtered = options.filter(opt => opt.toLowerCase().includes(search.toLowerCase()));
  return (
    <SearchableDropdownContainer>
      <DropdownInput
        placeholder={placeholder}
        value={value || search}
        onFocus={() => setOpen(true)}
        onChange={e => {
          setSearch(e.target.value);
          onChange('');
        }}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
        readOnly={!!value}
      />
      {open && filtered.length > 0 && (
        <DropdownList>
          {filtered.map(opt => (
            <DropdownItem
              key={opt}
              onMouseDown={() => {
                onChange(opt);
                setSearch('');
                setOpen(false);
              }}
            >
              {opt}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </SearchableDropdownContainer>
  );
}

// Mock a streaming API function
async function* mockStreamedCodeAPI() {
  const codeChunks = [
    "function add(a: number, b: number): number {",
    "\n  return a + b;",
    "\n}"
  ];
  for (const chunk of codeChunks) {
    await new Promise(res => setTimeout(res, 2000)); // simulate network delay
    yield chunk;
  }
}

export const Swytchcode: React.FC<SwytchcodeProps> = ({
  initialMessage = "Hello! I'm your AI assistant. How can I help you today? Ask me to show you some code examples!",
  promptValue = '',
  sendButtonColor = '#2563eb',
  userBubbleColor = '#3b82f6',
  height = '80vh',
  width = '100%',
}) => {
  const [activeTab, setActiveTab] = React.useState('methods');
  const [selectedLanguage, setSelectedLanguage] = React.useState('');
  const [selectedMethodLanguage, setSelectedMethodLanguage] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [methodSearch, setMethodSearch] = React.useState('');
  const [messages, setMessages] = React.useState<Array<{ id: number, role: string, content: string }>>([
    { id: 1, role: 'assistant', content: initialMessage }
  ]);
  const [input, setInput] = React.useState(promptValue);
  const [showLeftPanel, setShowLeftPanel] = React.useState(true);
  const [copiedId, setCopiedId] = React.useState<number | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const messagesContainerRef = React.useRef<HTMLDivElement>(null);

  // Mock data
  const languages = ['Python', 'JavaScript', 'TypeScript', 'Go', 'Java'];
  const workflows = [
    'Create an account and get all vendor',
    // Add more workflows as needed
  ];
  const methods = [
    'Generate code',
    'Analyze code',
    'Refactor code',
    // Add more methods as needed
  ];

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { id: Date.now(), role: 'user', content: input };
    const assistantId = userMessage.id + 1; // Ensure unique ID for assistant
    setMessages(prev => [
      ...prev,
      userMessage,
      { id: assistantId, role: 'assistant', content: '```typescript\n' }
    ]);
    setInput(''); // Clear input immediately
    setIsLoading(true);
    (async () => {
      for await (const chunk of mockStreamedCodeAPI()) {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantId && msg.role === 'assistant'
              ? { ...msg, content: msg.content + chunk }
              : msg
          )
        );
      }
      setMessages(prev =>
        prev.map(msg =>
          msg.id === assistantId && msg.role === 'assistant'
            ? { ...msg, content: msg.content + '\n```' }
            : msg
        )
      );
      setIsLoading(false);
    })();
  };

  const handleWorkflowOrMethodClick = (text: string) => {
    const userMessage = { id: Date.now(), role: 'user', content: text };
    const assistantId = userMessage.id + 1;
    setMessages(prev => [
      ...prev,
      userMessage,
      { id: assistantId, role: 'assistant', content: '```typescript\n' }
    ]);
    setIsLoading(true);
    (async () => {
      for await (const chunk of mockStreamedCodeAPI()) {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === assistantId && msg.role === 'assistant'
              ? { ...msg, content: msg.content + chunk }
              : msg
          )
        );
      }
      setMessages(prev =>
        prev.map(msg =>
          msg.id === assistantId && msg.role === 'assistant'
            ? { ...msg, content: msg.content + '\n```' }
            : msg
        )
      );
      setIsLoading(false);
    })();
  };

  // Helper to render messages with Prism highlight
  function renderMessage(msg: { id: number, role: string, content: string }) {
    if (msg.content.includes('```typescript')) {
      const match = msg.content.match(/```typescript\n([\s\S]*?)```/);
      if (match) {
        const code = match[1].replace(/\u00A0/g, ' ');
        const highlighted = Prism.highlight(code, Prism.languages.typescript, 'typescript');
        return (
          <div style={{ position: 'relative', background: '#23272f', color: '#f8f8f2', borderRadius: 8, padding: '1rem', margin: '1rem 0' }}>
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
              TypeScript
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
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2d333b';
                e.currentTarget.style.borderColor = '#555';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#23272f';
                e.currentTarget.style.borderColor = '#444';
              }}
            >
              {copiedId === msg.id ? 'Copied!' : 'Copy'}
            </button>
            <div style={{ height: 32 }} />
            <hr style={{ border: 0, borderTop: '1px solid #444', margin: '0 0 1rem 0' }} />
            <pre className="language-typescript" style={{ margin: 0 }}>
              <code className="language-typescript" dangerouslySetInnerHTML={{ __html: highlighted }} />
            </pre>
          </div>
        );
      }
    }
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

  // Calculate main content style based on left panel visibility
  const mainContentStyle = showLeftPanel
    ? {}
    : { borderRadius: '1rem', width: '100%' };

  return (
    <div style={{ height, width }} className="swytchcode-root">
      <GlobalStyles />
      <AppBg>
        <AppContainer>
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
                            <WorkflowItem key={wf} onClick={() => handleWorkflowOrMethodClick(wf)}>{wf}</WorkflowItem>
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
                            <WorkflowItem key={m} onClick={() => handleWorkflowOrMethodClick(m)}>{m}</WorkflowItem>
                          ))}
                      </WorkflowsList>
                    </>
                  )}
                </PanelContent>
              </div>
            </WorkflowsPanel>
          )}
          <MainContent style={mainContentStyle}>
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