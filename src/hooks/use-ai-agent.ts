import { useCallback } from 'react';

/**
 * Custom hook to make requests to Agentic AI and log the response to the console.
 * Includes credentials to send cookies with the request.
 * @returns {function} sendRequest - function to send a request to the AI agent
 */

const AGENTIC_AI_ENDPOINT = 'https://1vkkuqlk8h.execute-api.us-east-1.amazonaws.com/prod/';

export const useAIAgent = () => {
  const sendRequest = useCallback(async (payload: unknown) => {
    try {
      const response = await fetch(AGENTIC_AI_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
      });
      const data = await response.json();
      console.log('Agentic AI response:', data);
      return data;
    } catch (error) {
      console.error('Agentic AI request error:', error);
      throw error;
    }
  }, []);

  return { sendRequest };
};
