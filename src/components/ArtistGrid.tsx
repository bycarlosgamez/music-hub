import { SimpleGrid, Text } from '@chakra-ui/react';
import ArtistCard from './ArtistCard';
import ArtistCardWireframe from './ArtistCardWireframe';
import CardContainer from './CardContainer';
import useArtists from '../hooks/useArtists';
// import SearchInput from './SearchInput';

interface Props {
  accessToken: string;
}

const ArtistGrid = ({ accessToken }: Props) => {
  const { artists, error, isLoading } = useArtists(accessToken);

  // const wireframes = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {!artists && <Text>{error}</Text>}

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
            <CardContainer key={artist.id}>
              <ArtistCard artist={artist} />
            </CardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default ArtistGrid;
