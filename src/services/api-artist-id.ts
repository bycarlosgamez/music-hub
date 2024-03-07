const apiArtsitID = async (token: string, searchInput: string) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const artistParams = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal,
  };
  const url = `https://api.spotify.com/v1/search?q=${searchInput}&type=artist&limit=1`;

  const res = await fetch(url, artistParams);

  return res.json();
};

export default apiArtsitID;
