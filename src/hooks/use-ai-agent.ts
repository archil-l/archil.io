import { useCallback, useState } from 'react';

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendRequest = useCallback(
    async (prompt: string) => {
      if (!isAuthenticated || !prompt) {
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(AGENT_ENDPOINT, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({ prompt }),
        });
        if (!response.ok) {
          setLoading(false);
          setError(new Error('Failed to fetch data from AI agent'));
          throw new Error(response.statusText || 'Failed to fetch data from AI agent');
        }
        const { answer } = await response.json();
        setLoading(false);
        return answer;
      } catch (error) {
        setLoading(false);
        setError(error as Error);
        console.error('Agent request error:', error);
        throw error;
      }
    },
    [isAuthenticated]
  );

  return { sendRequest, loading, error };
};
