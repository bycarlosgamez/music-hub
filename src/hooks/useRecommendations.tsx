import { useState, useEffect } from 'react';
import apiRecommendations from '../services/api-recommendations';

export interface FetchResponse<T> {
  genres: string[];
  count: number;
  results: T[];
}

const useRecommendations = <T,>(accessToken: string, endpoint: string) => {
  const [recommendations, setRecommendations] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiRecommendations(accessToken, endpoint)
      .then((data) => {
        setRecommendations(data);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  }, [accessToken]);

  return { recommendations, error, isLoading };
};
export default useRecommendations;
