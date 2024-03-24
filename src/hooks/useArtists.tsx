import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Images {
  height: number;
  url: string;
  width: number;
}

interface URLS {
  spotify: string;
}

interface Artist {
  id: number;
  name: string;
  images: Images[];
  genres: string[];
  external_urls: URLS;
  popularity: number;
}

interface FetchArtistsResponse {
  artists: Artist[];
}

const useArtists = (accessToken: string) => {
  const searchInput = 'yob';
  const [artistID, setArtistID] = useState('');
  const [artists, setArtists] = useState<Artist[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    // setIsLoading(true);
    apiClient
      .get(`/search?q=${searchInput}&type=artist&limit=1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        signal: controller.signal,
      })
      .then((res) => setArtistID(res.data.artists.items[0].id))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [searchInput]);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchArtistsResponse>(`/artists/${artistID}/related-artists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        signal: controller.signal,
      })
      .then((res) => setArtists(res.data.artists))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, [artistID]);

  return { artists, error, isLoading };
};

export default useArtists;
