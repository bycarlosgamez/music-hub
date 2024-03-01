import { CLIENT_ID, CLIENT_SECRET } from '../../apiKeys';

const getAccessToken = () => {
  let authParams = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };

  return fetch('https://accounts.spotify.com/api/token', authParams);
};

export default getAccessToken;
