import { CLIENT_ID, CLIENT_SECRET } from '../../apiKeys';

const getAccessToken = async () => {
  const authParams = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };
  const url = 'https://accounts.spotify.com/api/token';
  const res = await fetch(url, authParams);

  return res.json();
};

export default getAccessToken;
