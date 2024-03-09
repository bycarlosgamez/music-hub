import { SimpleGrid, Text } from '@chakra-ui/react';
import useFetchArtists from '../hooks/useFetchArtists';
import ArtistCard from './ArtistCard';
import ArtistCardWireframe from './ArtistCardWireframe';
import CardContainer from './CardContainer';

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
            <CardContainer>
              <ArtistCardWireframe key={wireframe} />
            </CardContainer>
          ))}
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
