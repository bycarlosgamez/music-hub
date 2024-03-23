import { useState, useEffect } from 'react';
import apiRecommendations from '../services/api-recommendations';
import apiClient from '../services/api-client';

interface Genre {
  genre: string;
}

interface FetchGenresResponse {
  genres: Genre[];
}

const useGenres = (accessToken: string) => {
  const controller = new AbortController();

  const [genres, setGenres] = useState<Genre[]>([]);
  // const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    apiClient
      .get<FetchGenresResponse>('/recommendations/available-genre-seeds', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => setGenres(res.data.genres)).catch(err instanceof );
  }, []);

  return { Genres, error, isLoading };
};
