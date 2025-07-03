import { useEffect, useState } from 'react';
import { AGENT_ENDPOINT } from './use-ai-agent';

const AUTH_URL = `${AGENT_ENDPOINT}/sign-cookie`;

export const useAuthCookie = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(AUTH_URL, {
      method: 'GET',
      credentials: 'include', // Important: include cookies
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to authenticate');
        }
        setSuccess(true);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, error, success };
};
