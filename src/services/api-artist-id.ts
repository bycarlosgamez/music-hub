const apiArtsitID = async (token: string, searchInput: string) => {
  const artistParams = {
    method: 'GET',
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.spotify.com/v1/search?q=${searchInput}&type=artist&limit=1`;

  // get req artist id by seachinput
  const res = await fetch(url, artistParams);

  return res;

  // get req to grab all albums by artist
};

export default apiArtsitID;
