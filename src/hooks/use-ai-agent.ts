import { useCallback } from 'react';

/**
 * Custom hook to make requests to Agentic AI and log the response to the console.
 * Includes credentials to send cookies with the request.
 * @returns {function} sendRequest - function to send a request to the AI agent
 */

type UseAIAgentProps = {
  isAuthenticated?: boolean;
};

export const AGENT_ENDPOINT = 'https://d1hmz7iun38izq.cloudfront.net';

export const useAIAgent = ({ isAuthenticated = false }: UseAIAgentProps) => {
  const sendRequest = useCallback(
    async (payload: unknown) => {
      if (!isAuthenticated) {
        return;
      }
      try {
        const response = await fetch(AGENT_ENDPOINT, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        console.log('Agentic AI response:', data);
        return data;
      } catch (error) {
        console.error('Agentic AI request error:', error);
        throw error;
      }
    },
    [isAuthenticated]
  );

  return { sendRequest };
};
