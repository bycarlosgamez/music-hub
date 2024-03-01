const CLIENT_ID = '1d42b98d48da424182c2b79a5ed0d22f';
const CLIENT_SECRET = 'ebe8189364c645aa8077c1cf023a170f';

const getAccessToken = () => {
  let authParams = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };

  return fetch('https://accounts.spotify.com/api/token', authParams);
};

export default getAccessToken;
