const apiRecommendations = async (token: string, endpoint: string) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const data = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal,
  };
  const url = `https://api.spotify.com/v1/recommendations${endpoint}`;

  const res = await fetch(url, data);

  return res.json();
};

export default apiRecommendations;
