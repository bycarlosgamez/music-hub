import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { Genre } from '../hooks/useArtists';

interface FetchGenresResponse {
  genres: Genre[];
}

const useGenres = (accessToken: string) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse, any>('/recommendations/available-genre-seeds', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        signal: controller.signal,
      })
      .then((res) => {
        setGenres(res.data.genres);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
  }, [accessToken]);

  return { genres, error, isLoading };
};

export default useGenres;
