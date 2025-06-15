import { useEffect, useState } from 'react';

interface UseContentResult {
  content: string;
  isLoading: boolean;
  isError: boolean;
}

export function useContent(path: string | undefined): UseContentResult {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!path) {
      setContent('');
      setIsError(false);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setIsError(false);
    fetch(path)
      .then(res => res.text())
      .then(text => {
        setContent(text);
        setIsLoading(false);
      })
      .catch(() => {
        setContent('Failed to load content.');
        setIsError(true);
        setIsLoading(false);
      });
  }, [path]);

  return { content, isLoading, isError };
}
