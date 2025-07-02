import { useState, useCallback, useEffect } from 'react';

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

export const ASSISTANT_USER: ChatUser = { id: 'assistant', name: 'Assistant' };

export const useChat = () => {
  const [user, setUser] = useState<ChatUser>({ id: 'user', name: 'User' });
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // Load initial messages from localStorage or any other source
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    const updatedMessages = messages.slice().map(msg => {
      if (msg.user.id === 'user' && msg.user.name === 'User') {
        return { ...msg, user: user };
      }
      return msg;
    });
    setMessages(updatedMessages);
    // Save updated messages to localStorage
    localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const sendMessage = useCallback((content: string, sender: ChatUser) => {
    const message: ChatMessage = {
      id: `${Date.now()}-${Math.random()}`,
      user: sender,
      content,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, message]);
    // Save messages to localStorage
    localStorage.setItem('chatMessages', JSON.stringify([...messages, message]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
