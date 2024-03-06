const getRelatedArtsits = async (token: string, id: string) => {
  const artistParams = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.spotify.com/v1/artists/${id}/related-artists`;

  const res = await fetch(url, artistParams);

  return res;
};

export default getRelatedArtsits;
