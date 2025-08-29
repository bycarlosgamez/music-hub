import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Image {
  '#text': string;
}

export interface Artist {
  name: string;
  image: Image[];
  listeners: string;
  mbid: string;
}

const useArtists = () => {
  const [artists, setArtsits] = useState<Artist[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchTopArtists = async () => {
      try {
        const res = await apiClient(
          'tag.getTopArtists',
          {
            tag: 'shoegaze',
          },
          controller.signal
        );
        setArtsits(res.data.topartists.artist);
      } catch (err) {
        if (err instanceof CanceledError) return;
        if (err instanceof Error) setError(err.message);
      }
    };
    fetchTopArtists();

    return () => controller.abort();
  }, []);

  console.log(artists);
  return { artists, error };
};

export default useArtists;
