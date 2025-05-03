import { styled } from '../stitches.config';

export const AppBg = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '2rem 0',
});

export const AppContainer = styled('div', {
  display: 'flex',
  width: '100%',
  maxWidth: 1400,
  minHeight: '80vh',
  background: 'none',
  boxShadow: 'none',
  border: '1px solid',
  borderRadius: '1rem',
  overflow: 'hidden',
  variants: {
    borderColor: {
      default: {
        borderColor: '#e5e7eb'
      }
    }
  },
  defaultVariants: {
    borderColor: 'default'
  }
});

export const WorkflowsPanel = styled('div', {
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

export const PanelContent = styled('div', {
  padding: '0.8rem 1.5rem 3.5rem',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const MainContent = styled('div', {
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

export const ChatHeader = styled('div', {
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

export const BackArrow = styled('button', {
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

export const MessagesContainer = styled('div', {
  flex: 1,
  overflowY: 'auto',
  maxHeight: '60vh',
  padding: '2rem 2rem 1rem 2rem',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

export const InputForm = styled('form', {
  display: 'flex',
  gap: '0.5rem',
  padding: '1.25rem 2rem',
  borderTop: '1px solid $border',
  background: '#fff',
  borderBottomRightRadius: '1rem',
});

export const MessageInput = styled('input', {
  flex: 1,
  padding: '0.75rem 1rem',
  border: '1px solid $border',
  borderRadius: '0.375rem',
  fontSize: '1.05rem',
});

export const SendBtn = styled('button', {
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

export const Throbber = styled('div', {
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

export const GlobalStyles = styled('style', {
  '@global': {
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
});

export const Tabs = styled('div', {
  display: 'flex',
  borderBottom: '1.5px solid $border',
  marginBottom: '0.7rem',
  width: '100%',
  minHeight: 0,
});

export const Tab = styled('button', {
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

export const Label = styled('div', {
  fontWeight: 500,
  marginBottom: '0.25rem',
  color: '#444',
  fontSize: '1.01rem',
});

export const FormGroup = styled('div', {
  marginBottom: '0.6rem',
  display: 'flex',
  flexDirection: 'column',
});

export const SearchableDropdownContainer = styled('div', {
  position: 'relative',
  width: '100%',
});

export const DropdownInput = styled('input', {
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

export const DropdownList = styled('div', {
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

export const DropdownItem = styled('div', {
  padding: '0.2rem 1rem',
  cursor: 'pointer',
  color: '#000',
  fontWeight: 100,
  fontSize: '0.95rem',
  '&:hover': {
    background: '$panel',
  },
});

export const SearchInput = styled('input', {
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

export const WorkflowsList = styled('div', {
  maxHeight: '370px',
  overflowY: 'auto'
});

export const WorkflowItem = styled('div', {
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