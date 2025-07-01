import { useEffect, useState } from 'react';

const AUTH_URL = 'https://dqniveqd37.execute-api.us-east-1.amazonaws.com/prod/sign-cookie';

export function useAuthCookie() {
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
}
