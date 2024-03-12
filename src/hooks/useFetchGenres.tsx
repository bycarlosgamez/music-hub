import { useState, useEffect } from 'react';
import apiGenres from '../services/api-genres';

const useFetchGenres = (accessToken: string) => {
  const [genres, setGenres] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiGenres(accessToken)
      .then((data) => {
        setGenres(data.genres);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  }, [accessToken]);

  return { genres, error, isLoading };
};

export default useFetchGenres;
