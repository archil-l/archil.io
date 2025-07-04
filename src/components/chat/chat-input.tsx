import React, { useState } from 'react';
import { StyledChatInputWrapper } from './styles';

type ChatInputProps = {
  loading: boolean;
  messageCount: number;
  handleSendToAgent: (msg: string) => void;
  handleNewChat: () => void;
};

const ChatInput = ({
  loading,
  messageCount,
  handleSendToAgent,
  handleNewChat,
}: ChatInputProps): JSX.Element => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      handleSendToAgent(input.trim());
      setInput(''); // Clear input after sending
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !loading && input.trim()) {
      e.preventDefault(); // Prevent form submission
      handleSend();
    }
  };

  return (
    <StyledChatInputWrapper>
      <input
        id="chat-input"
        className="chat-input"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleInputKeyDown}
        placeholder="Type your message..."
        disabled={loading}
      />
      <button className="send-button" onClick={handleSend} disabled={loading || !input.trim()}>
        {loading ? 'Sending...' : 'Send'}
      </button>
      <button
        className="new-chat"
        onClick={handleNewChat}
        disabled={!messageCount || messageCount < 2}
      >
        {'New chat'}
      </button>
    </StyledChatInputWrapper>
  );
};

export default ChatInput;
