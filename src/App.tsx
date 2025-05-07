import { Swytchcode } from './Swytchcode';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Swytchcode
        initialMessage="Welcome to Swytchcode! Ask me anything."
        promptValue="Type your question..."
        sendButtonColor="#1a73e8"
        userBubbleColor="#1976d2"
        height="600px"
        width="1400px"
        borderColor="#e5e7eb"
        apiKey='YOUR_API_KEY'
      />
    </div>
  );
}

export default App;
