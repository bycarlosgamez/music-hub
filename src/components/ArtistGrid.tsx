import { SimpleGrid, Text } from '@chakra-ui/react';
import useFetchArtists from '../hooks/useFetchArtists';
import ArtistCard from './ArtistCard';

interface Props {
  accessToken: string;
}

const ArtistGrid = ({ accessToken }: Props) => {
  const { artists, error } = useFetchArtists(accessToken);

  console.log(artists);

  return (
    <>
      {!artists && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {artists &&
          artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default ArtistGrid;
