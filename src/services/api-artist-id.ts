const apiArtsitID = async (token: string, searchInput: string) => {
  let artistParams = {
    method: 'GET',
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  // get req artist id by seachinput
  let res = await fetch(
    `https://api.spotify.com/v1/search?q=${searchInput}&type=artist&limit=1`,
    artistParams
  );

  return res;

  // get req to grab all albums by artist
};

export default apiArtsitID;
