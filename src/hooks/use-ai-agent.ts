import { useCallback, useState, useEffect, useRef } from 'react';
import { API_ENDPOINTS } from '../constants/api-consts';

/**
 * Custom hook to make WebSocket connections to Agentic AI and handle real-time responses.
 * @returns {object} - Functions and state for interacting with the AI agent
 */

// WebSocket message types
export enum WebSocketMessageType {
  CONNECT = 'connect',
  MESSAGE = 'message',
  RESPONSE = 'response',
  ERROR = 'error',
  CLOSE = 'close',
}

type UseAIAgentProps = {
  isAuthenticated?: boolean;
};

export type BedrockMessage = {
  role: 'user' | 'assistant';
  content: MessageContent[];
};

export type MessageContent = {
  text: string;
};

// For backward compatibility, keep the old endpoint constant
export const AGENT_ENDPOINT = API_ENDPOINTS.AGENT_WS;

type WebSocketMessage = {
  type: WebSocketMessageType;
  payload?: any;
};

export const useAIAgent = ({ isAuthenticated = false }: UseAIAgentProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);
  const responseResolveRef = useRef<((value: string | undefined) => void) | null>(null);

  // Initialize WebSocket connection
  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    // Create WebSocket connection
    const connectWebSocket = () => {
      try {
        const socket = new WebSocket(API_ENDPOINTS.AGENT_WS);

        socket.onopen = () => {
          console.log('WebSocket connection established');
          setConnected(true);
          setError(null);
        };

        socket.onmessage = event => {
          try {
            const data = JSON.parse(event.data) as WebSocketMessage;

            if (data.type === WebSocketMessageType.RESPONSE) {
              setLoading(false);
              if (responseResolveRef.current) {
                responseResolveRef.current(data.payload?.answer);
                responseResolveRef.current = null;
              }
            } else if (data.type === WebSocketMessageType.ERROR) {
              setLoading(false);
              const errorMessage = data.payload?.message || 'Unknown error from AI agent';
              setError(new Error(errorMessage));
              if (responseResolveRef.current) {
                responseResolveRef.current(undefined);
                responseResolveRef.current = null;
              }
            }
          } catch (error) {
            console.error('Error parsing WebSocket message:', error);
            setError(new Error('Failed to parse response from AI agent'));
            setLoading(false);
            if (responseResolveRef.current) {
              responseResolveRef.current(undefined);
              responseResolveRef.current = null;
            }
          }
        };

        socket.onerror = event => {
          console.error('WebSocket error:', event);
          setError(new Error('WebSocket connection error'));
          setConnected(false);
          setLoading(false);
          if (responseResolveRef.current) {
            responseResolveRef.current(undefined);
            responseResolveRef.current = null;
          }
        };

        socket.onclose = event => {
          console.log('WebSocket connection closed:', event.code, event.reason);
          setConnected(false);

          // Attempt to reconnect unless it was a normal closure
          if (event.code !== 1000) {
            console.log('Attempting to reconnect...');
            setTimeout(connectWebSocket, 3000);
          }

          if (responseResolveRef.current) {
            responseResolveRef.current(undefined);
            responseResolveRef.current = null;
          }
        };

        socketRef.current = socket;
      } catch (error) {
        console.error('Failed to create WebSocket connection:', error);
        setError(error as Error);
      }
    };

    connectWebSocket();

    // Cleanup function to close WebSocket connection when component unmounts
    return () => {
      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.close(1000, 'Component unmounted');
      }
    };
  }, [isAuthenticated]);

  // Send request via WebSocket
  const sendRequest = useCallback(
    async (conversation: BedrockMessage[] = []) => {
      if (!isAuthenticated || !conversation || conversation.length === 0) {
        return;
      }

      if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
        setError(new Error('WebSocket is not connected'));
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const message: WebSocketMessage = {
          type: WebSocketMessageType.MESSAGE,
          payload: { conversation },
        };

        socketRef.current.send(JSON.stringify(message));

        // Create a promise that will be resolved when we receive a response
        const responsePromise = new Promise<string | undefined>(resolve => {
          responseResolveRef.current = resolve;

          // Set a timeout to avoid hanging indefinitely
          setTimeout(() => {
            if (responseResolveRef.current === resolve) {
              setLoading(false);
              setError(new Error('Request timed out'));
              responseResolveRef.current = null;
              resolve(undefined);
            }
          }, 30000); // 30 second timeout
        });

        return await responsePromise;
      } catch (error) {
        setLoading(false);
        setError(error as Error);
        console.error('Agent request error:', error);
        throw error;
      }
    },
    [isAuthenticated]
  );

  return { sendRequest, loading, error, connected };
};
