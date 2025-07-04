import React, { useEffect } from 'react';
import { BedrockMessage, useAIAgent } from '../../hooks/use-ai-agent';
import { useAuthCookie } from '../../hooks/use-auth';
import { ASSISTANT_USER, ChatMessage, GUEST_USER, useChat } from '../../hooks/use-chat';
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
  const { messages, newChat, postAsUser, postAsAssistant } = useChat();

  useEffect(() => {
    if (messages.length === 0) {
      // We can trigger an introduction from the assistant if its a new chat.
      return;
    }

    const handleSend = async () => {
      const lastMessage = messages?.at(-1);
      // Checking that last message was posted by the user.
      if (lastMessage?.user?.id === GUEST_USER.id) {
        try {
          const formattedMsgs: BedrockMessage[] = messages.map((message: ChatMessage) => ({
            role: message.user.id,
            content: [{ text: message.content }],
          }));

          const answer = await sendRequest(formattedMsgs);
          if (answer) {
            postAsAssistant(answer);
          } else {
            postAsAssistant('No response from assistant.');
          }
        } catch (error) {
          postAsAssistant('Error contacting assistant.');
        }
      }
    };

    handleSend();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleNewChat = () => {
    newChat();
  };

  const handleNewMessage = (input: string) => {
    if (!input.trim()) return;
    postAsUser(input);
  };

  return (
    <Section sectionId={sectionIds.Agent} logo={<AssistantLogo />}>
      <ChatHistory messages={messagesWithAssistantThinking} />
      <ChatInput
        loading={agentLoading}
        messageCount={messages?.length || 0}
        handleNewMessage={handleNewMessage}
        handleNewChat={handleNewChat}
      />
    </Section>
  );
};

export default Agent;
