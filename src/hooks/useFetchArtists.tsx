import { useState, useEffect } from 'react';
import apiArtistID from '../services/api-artist-id';
import getRelatedArtsits from '../services/api-artist-related';

const useFetchArtists = (accessToken: string) => {
  const searchInput = 'yob';
  const [artistID, setArtsitID] = useState('');
  const [artists, setArtists] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiArtistID(accessToken, searchInput)
      .then((data) => {
        setArtsitID(data.artists.items[0].id);
      })
      .catch((err) => setError(err.message));
  }, [searchInput]);

  useEffect(() => {
    getRelatedArtsits(accessToken, artistID)
      .then((data) => {
        setArtists(data.artists);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [artistID]);

  return { artists, error, isLoading };
};

export default useFetchArtists;
