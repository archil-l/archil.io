import { useState, useCallback } from 'react';

export type ChatUser = {
  id: string;
  name: string;
};

export type ChatMessage = {
  id: string;
  user: ChatUser;
  content: string;
  timestamp: number;
};

const ASSISTANT_USER: ChatUser = { id: 'assistant', name: 'Assistant' };

export const useChat = () => {
  const [user, setUser] = useState<ChatUser>({ id: 'user', name: 'User' });
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const sendMessage = useCallback((content: string, sender: ChatUser) => {
    const message: ChatMessage = {
      id: `${Date.now()}-${Math.random()}`,
      user: sender,
      content,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, message]);
  }, []);

  const sendAsUser = useCallback(
    (content: string) => {
      sendMessage(content, user);
    },
    [user, sendMessage]
  );

  const sendAsAssistant = useCallback(
    (content: string) => {
      sendMessage(content, ASSISTANT_USER);
    },
    [sendMessage]
  );

  const setUserName = useCallback((name: string) => {
    setUser(u => ({ ...u, name }));
  }, []);

  return {
    messages,
    user,
    setUserName,
    sendAsUser,
    sendAsAssistant,
  };
};
