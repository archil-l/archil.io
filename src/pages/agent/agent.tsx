import React, { useState } from 'react';
import { useAIAgent } from '../../hooks/use-ai-agent';
import { useAuthCookie } from '../../hooks/use-auth';
import { ASSISTANT_USER, useChat } from '../../hooks/use-chat';
import { UsernameInput } from '../../components/username-input/username-input';
import { ChatHistory } from '../../components/chat/chat-history';
import { sectionIds } from '../../constants/consts';
import Section from '../../components/section/section';

const Agent = (): JSX.Element => {
  const { loading: cookieLoading, success } = useAuthCookie();
  const { loading: agentLoading, sendRequest } = useAIAgent({
    isAuthenticated: !cookieLoading && success,
  });
  const { messages, user, setUserName, sendAsUser, sendAsAssistant } = useChat();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesWithAssistantThinking = [
    ...messages,
    ...(agentLoading
      ? [
          {
            id: 'agent-thinking',
            user: ASSISTANT_USER,
            content: '🤔...',
            timestamp: Date.now(),
          },
        ]
      : []),
  ];

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
    <Section sectionId={sectionIds.Agent}>
      <UsernameInput name={user.name} onChange={setUserName} />
      <ChatHistory messages={messagesWithAssistantThinking} />
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
    </Section>
  );
};

export default Agent;
