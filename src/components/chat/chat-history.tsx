import React from 'react';

import { StyledChatWrapper } from './styles';
import { ChatMessage } from 'hooks/use-chat';
import { formatChatMessages } from 'utils/chat-utils';

type ChatHistoryProps = {
  messages: ChatMessage[];
};

export const ChatHistory = ({ messages }: ChatHistoryProps): JSX.Element => (
  <StyledChatWrapper dangerouslySetInnerHTML={{ __html: formatChatMessages(messages) }} />
);
