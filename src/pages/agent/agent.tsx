import React, { useEffect, useState } from 'react';
import { useAIAgent } from '../../hooks/use-ai-agent';
import { useAuthCookie } from '../../hooks/use-auth';
import { ASSISTANT_USER, useChat } from '../../hooks/use-chat';
import { UsernameInput } from '../../components/chat/username-input';
import { ChatHistory } from '../../components/chat/chat-history';
import { sectionIds } from '../../constants/consts';
import Section from '../../components/section/section';
import ChatInput from 'components/chat/chat-input';

const Agent = (): JSX.Element => {
  const { loading: cookieLoading, success } = useAuthCookie();
  const { loading: agentLoading, sendRequest } = useAIAgent({
    isAuthenticated: !cookieLoading && success,
  });
  const { messages, user, setUserName, sendAsUser, sendAsAssistant } = useChat();

  useEffect(() => {
    // Automatically scroll to the bottom of the chat when messages change
    const chatContainer = document.querySelector('.chat-history');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

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

  const handleSendToAgent = async (input: string) => {
    if (!input.trim()) return;
    sendAsUser(input);
    try {
      const response = await sendRequest({ query: input });
      if (response && response.message) {
        sendAsAssistant(response.message);
      } else {
        sendAsAssistant('No response from agent.');
      }
    } catch (error) {
      sendAsAssistant('Error contacting agent.');
    }
  };

  return (
    <Section sectionId={sectionIds.Agent}>
      <UsernameInput name={user.name} onChange={setUserName} />
      <ChatHistory messages={messagesWithAssistantThinking} />
      <ChatInput loading={agentLoading} handleSendToAgent={handleSendToAgent} />
    </Section>
  );
};

export default Agent;
