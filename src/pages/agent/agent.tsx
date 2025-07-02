import React, { useState } from 'react';
import { useAIAgent } from '../../hooks/use-ai-agent';
import { useAuthCookie } from '../../hooks/use-auth';
import { useChat } from '../../hooks/use-chat';
import { UsernameInput } from '../../components/username-input/username-input';
import { ChatHistory } from '../../components/chat/chat-history';
import SectionWrapper from '../../components/section/section-wrapper';
import { sectionIds } from '../../constants/consts';

const Agent = (): JSX.Element => {
  const { success } = useAuthCookie();
  const { sendRequest } = useAIAgent({ isAuthenticated: success });
  const { messages, user, setUserName, sendAsUser, sendAsAssistant } = useChat();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    sendAsUser(input);
    setLoading(true);
    try {
      const response = await sendRequest({ query: input });
      if (response && response.answer) {
        sendAsAssistant(response.answer);
      } else {
        sendAsAssistant('No response from agent.');
      }
    } catch (error) {
      sendAsAssistant('Error contacting agent.');
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <SectionWrapper sectionId={sectionIds.Agent}>
      <UsernameInput name={user.name} onChange={setUserName} />
      <ChatHistory messages={messages} />
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Type your message..."
          style={{ flex: 1 }}
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading || !input.trim()}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Agent;
