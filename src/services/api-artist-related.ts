const getRelatedArtsits = async (token: string, id: string) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const artistParams = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    signal,
  };
  const url = `https://api.spotify.com/v1/artists/${id}/related-artists`;

  const res = await fetch(url, artistParams);

  return res.json();
};

export default getRelatedArtsits;
