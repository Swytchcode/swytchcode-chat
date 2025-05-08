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
        apiKey='sk_172629df8acb4c5378d06970645149eada885e0975042160b6134a8f2c43f4b8'
      />
    </div>
  );
}

export default App;
