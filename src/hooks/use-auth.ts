import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../constants/api-consts';

export const useAuthCookie = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(API_ENDPOINTS.AUTH, {
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
