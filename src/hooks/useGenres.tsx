import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genre {
  genre: string;
}

interface FetchGenresResponse {
  genres: string[];
}

const useGenres = (accessToken: string) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGenresResponse, any>('/recommendations/available-genre-seeds', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        signal: controller.signal,
      })
      .then((res) => setGenres(res.data.genres))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, [accessToken]);

  return { genres, error };
};

export default useGenres;
