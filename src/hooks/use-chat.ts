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

export const ASSISTANT_USER: ChatUser = { id: 'assistant', name: 'Assistant 🦴' };
export const GUEST_USER: ChatUser = { id: 'guest', name: 'Guest 🧑' };
const LOCALSTORAGE_KEY = 'chatMessages';

export const useChat = () => {
  const [user, setUser] = useState<ChatUser>(GUEST_USER);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // Load initial messages from localStorage or any other source
    const storedMessages = localStorage.getItem(LOCALSTORAGE_KEY);
    if (storedMessages) {
      try {
        // Parse the stored messages and ensure they are of type ChatMessage[]
        const parsedMessages = JSON.parse(storedMessages) as ChatMessage[];
        // Validate the structure of each message
        setMessages(parsedMessages);
      } catch (error) {
        console.error('Failed to parse stored messages:', error);
        // If parsing fails, reset messages to an empty array
      }
    }
  }, []);

  useEffect(() => {
    if (!user) return;
    if (messages.length === 0) return;
    const updatedMessages = messages.slice().map(msg => {
      if (msg.user.id === 'user' && msg.user.name === 'User') {
        return { ...msg, user: user };
      }
      return msg;
    });
    setMessages(updatedMessages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (messages.length === 0) return;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const sendMessage = useCallback(
    (content: string, sender: ChatUser) => {
      const message: ChatMessage = {
        id: `${Date.now()}-${Math.random()}`,
        user: sender,
        content,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, message]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [messages, setMessages]
  );

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
