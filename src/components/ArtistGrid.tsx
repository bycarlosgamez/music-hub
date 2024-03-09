import { SimpleGrid, Text } from '@chakra-ui/react';
import useFetchArtists from '../hooks/useFetchArtists';
import ArtistCard from './ArtistCard';
import ArtistCardWireframe from './ArtistCardWireframe';

interface Props {
  accessToken: string;
}

const ArtistGrid = ({ accessToken }: Props) => {
  const { artists, error, isLoading } = useFetchArtists(accessToken);
  const wireframes = [1, 2, 3, 4, 5, 6];

  console.log(artists);

  return (
    <>
      {!artists && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {isLoading &&
          wireframes.map((wireframe) => (
            <ArtistCardWireframe key={wireframe} />
          ))}
        {artists &&
          artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default ArtistGrid;
