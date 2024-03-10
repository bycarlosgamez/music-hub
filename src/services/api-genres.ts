const apiGenres = async (token: string) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const params = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal,
  };
  const url = `https://api.spotify.com/v1/recommendations/available-genre-seeds`;

  const res = await fetch(url, params);

  return res.json();
};

export default apiGenres;
