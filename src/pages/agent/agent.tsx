import React, { useEffect } from 'react';
import { BedrockMessage, useAIAgent } from '../../hooks/use-ai-agent';
import { useAuthCookie } from '../../hooks/use-auth';
import { ASSISTANT_USER, ChatMessage, GUEST_USER, useChat } from '../../hooks/use-chat';
import { ChatHistory } from '../../components/chat/chat-history';
import { sectionIds } from '../../constants/nav-consts';
import Section from '../../components/section/section';
import ChatInput from '../../components/chat/chat-input';
import { AssistantLogo } from '../../components/assistant-logo/assistant-logo';

const Agent = (): JSX.Element => {
  const { loading: cookieLoading, success } = useAuthCookie();
  const {
    loading: agentLoading,
    sendRequest,
    connected,
    error,
  } = useAIAgent({
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
          // Check if WebSocket is connected before sending
          if (!connected) {
            postAsAssistant(
              'Connection to assistant not established. Please try again in a moment.'
            );
            return;
          }

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
          console.error('Error in handleSend:', error);
          postAsAssistant('Error contacting assistant.');
        }
      }
    };

    handleSend();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  // Display connection error if there is one
  useEffect(() => {
    if (error && messages.length > 0) {
      postAsAssistant(`Connection error: ${error.message}. Attempting to reconnect...`);
    }
  }, [error, postAsAssistant, messages.length]);

  // Display connection status changes
  useEffect(() => {
    // Only show connection status messages if there are already messages in the chat
    if (messages.length > 0) {
      if (connected) {
        // Optional: Notify when connection is established/re-established
        // postAsAssistant('Connected to assistant.');
      }
    }
  }, [connected, postAsAssistant, messages.length]);

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

    // Don't allow sending messages if not connected
    if (!connected && messages.length > 0) {
      postAsAssistant('Not connected to assistant. Please wait for connection to be established.');
      return;
    }

    postAsUser(input);
  };

  const connectionStatus =
    !cookieLoading && success && !connected ? 'Connecting to assistant...' : '';

  return (
    <Section sectionId={sectionIds.Agent} logo={<AssistantLogo />}>
      <ChatHistory messages={messagesWithAssistantThinking} />
      {connectionStatus && (
        <div style={{ textAlign: 'center', color: '#888', padding: '8px' }}>{connectionStatus}</div>
      )}
      <ChatInput
        loading={agentLoading || (success && !connected)}
        messageCount={messages?.length || 0}
        handleNewMessage={handleNewMessage}
        handleNewChat={handleNewChat}
      />
    </Section>
  );
};

export default Agent;
