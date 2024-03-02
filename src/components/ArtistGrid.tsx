import { useState, useEffect } from 'react';
import getAccessToken from '../services/api-access-token';
import apiArtsitID from '../services/api-artist-id';

const ArtistGrid = () => {
  const searchInput = 'yob';
  const [accessToken, setAccessToken] = useState('');
  const [artistID, setArtistID] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getAccessToken()
      .then((res) => res.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((err) => setError(err.message));
  }, []);

  apiArtsitID(accessToken, searchInput)
    .then((res) => res.json())
    .then((data) => setArtistID(data.artists.items[0].id))
    .catch((err) => setError(err.message));

  console.log(artistID);

  return <></>;
};

export default ArtistGrid;
