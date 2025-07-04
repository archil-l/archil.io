import React from 'react';
import { useAIAgent } from '../../hooks/use-ai-agent';
import { useAuthCookie } from '../../hooks/use-auth';
import { ASSISTANT_USER, useChat } from '../../hooks/use-chat';
import { ChatHistory } from '../../components/chat/chat-history';
import { sectionIds } from '../../constants/consts';
import Section from '../../components/section/section';
import ChatInput from '../../components/chat/chat-input';
import { AssistantLogo } from '../../components/assistant-logo/assistant-logo';

const Agent = (): JSX.Element => {
  const { loading: cookieLoading, success } = useAuthCookie();
  const { loading: agentLoading, sendRequest } = useAIAgent({
    isAuthenticated: !cookieLoading && success,
  });
  const { messages, newChat, sendAsUser, sendAsAssistant } = useChat();

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

  const handleNewChat = () => {
    newChat();
  };

  const handleSendToAgent = async (input: string) => {
    if (!input.trim()) return;
    sendAsUser(input);
    try {
      const answer = await sendRequest(input);
      if (answer) {
        sendAsAssistant(answer);
      } else {
        sendAsAssistant('No response from assistant.');
      }
    } catch (error) {
      sendAsAssistant('Error contacting assistant.');
    }
  };

  return (
    <Section sectionId={sectionIds.Agent} logo={<AssistantLogo />}>
      <ChatHistory messages={messagesWithAssistantThinking} />
      <ChatInput
        loading={agentLoading}
        messageCount={messages?.length || 0}
        handleSendToAgent={handleSendToAgent}
        handleNewChat={handleNewChat}
      />
    </Section>
  );
};

export default Agent;
