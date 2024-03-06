import { useState, useEffect } from 'react';
import apiArtistID from '../services/api-artist-id';
import getRelatedArtsits from '../services/api-artist-related';

const useFetchArtists = (accessToken: string) => {
  const searchInput = 'mastodon';
  const [artistID, setArtsitID] = useState('');
  const [artists, setArtists] = useState<any[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiArtistID(accessToken, searchInput)
      .then((res) => res.json())
      .then((data) => {
        setArtsitID(data.artists.items[0].id);
      })
      .catch((err) => setError(err.message));
  }, [searchInput]);

  useEffect(() => {
    getRelatedArtsits(accessToken, artistID)
      .then((res) => res.json())
      .then((data) => setArtists(data.artists))
      .catch((err) => setError(err.message));
  }, [artistID]);

  return { artists, error };
};

export default useFetchArtists;
