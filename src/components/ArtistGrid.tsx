import { SimpleGrid, Text } from '@chakra-ui/react';
import ArtistCard from './ArtistCard';
import ArtistCardWireframe from './ArtistCardWireframe';
import CardContainer from './CardContainer';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import SearchInput from './SearchInput';

interface Props {
  accessToken: string;
}

interface Images {
  height: number;
  url: string;
  width: number;
}

interface URLS {
  spotify: string;
}

interface Artist {
  id: number;
  name: string;
  images: Images[];
  genres: string[];
  external_urls: URLS;
  popularity: number;
}

interface FetchArtistsResponse {
  artists: Artist[];
}

const ArtistGrid = ({ accessToken }: Props) => {
  const searchInput = 'yob';

  const [artistID, setArtistID] = useState('');
  const [artists, setArtists] = useState<Artist[]>([]);
  const [error, setError] = useState('');

  const wireframes = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    // setIsLoading(true);
    apiClient
      .get(`/search?q=${searchInput}&type=artist&limit=1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => setArtistID(res.data.artists.items[0].id))
      .catch((err) => setError(err.message));
  }, [searchInput]);

  useEffect(() => {
    apiClient
      .get<FetchArtistsResponse>(`/artists/${artistID}/related-artists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => setArtists(res.data.artists))
      .catch((err) => setError(err.message));
  }, [artistID]);

  console.log(artists);

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding='10px'
        spacing={5}
      >
        {/* {wireframes.map((wireframe) => (
          <CardContainer>
            <ArtistCardWireframe key={wireframe} />
          </CardContainer>
        ))} */}
        {artists &&
          artists.map((artist) => (
            <CardContainer>
              <ArtistCard key={artist.id} artist={artist} />
            </CardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default ArtistGrid;
