const apiArtsitID = async (token: string, searchInput: string) => {
  const artistParams = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.spotify.com/v1/search?q=${searchInput}&type=artist&limit=1`;

  const res = await fetch(url, artistParams);

  return res;
};

export default apiArtsitID;
