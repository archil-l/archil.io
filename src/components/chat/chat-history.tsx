import React, { useEffect } from 'react';

import { StyledChatWrapper } from './styles';
import { ChatMessage } from '../../hooks/use-chat';
import { formatChatMessages } from '../../utils/chat-utils';

type ChatHistoryProps = {
  messages: ChatMessage[];
};

export const ChatHistory = ({ messages }: ChatHistoryProps): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      // Automatically scroll to the bottom of the chat when messages change
      const chatContainer = document.querySelector('.chat-history');
      const lastBubble = chatContainer?.lastElementChild as HTMLElement;
      lastBubble?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);
  }, [messages]);
  return (
    <StyledChatWrapper
      className="chat-history"
      dangerouslySetInnerHTML={{ __html: formatChatMessages(messages) }}
    />
  );
};
