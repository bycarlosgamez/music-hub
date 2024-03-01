import { useState, useEffect } from 'react';
import getAccessToken from '../services/api-access-token';
const ArtistGrid = () => {
  const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getAccessToken()
      .then((res) => res.json())
      .then((data) => setAccessToken(data.access_token))
      .catch((err) => setError(err.message));
  }, []);

  console.log(accessToken, error);
  return <></>;
};

export default ArtistGrid;
