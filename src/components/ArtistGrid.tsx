import { Text, Box, Container } from '@chakra-ui/react';
import Masonry from 'react-masonry-css';
import ArtistCard from './ArtistCard';
import ArtistCardWireframe from './ArtistCardWireframe';
import CardContainer from './CardContainer';
import useArtists from '../hooks/useArtists';
import Header from './Header';

interface Props {
  accessToken: string;
}

const ArtistGrid = ({ accessToken }: Props) => {
  const { artists, error, isLoading } = useArtists(accessToken);
  const wireframes = [1, 2, 3, 4, 5, 6, 7, 8];
  const breakpoints = {
    default: 4,
    320: 1,
    768: 2,
    960: 3,
    1200: 3,
  };

  return (
    <Container maxW='100%'>
      {!artists && <Text>{error}</Text>}
      {artists.length === 0 && <Header />}

      <Box p={2}>Main Artist Card Component</Box>

      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {isLoading &&
          wireframes.map((wireframe, i) => (
            <CardContainer key={i}>
              <ArtistCardWireframe key={wireframe} />
            </CardContainer>
          ))}

        {artists &&
          artists.map((artist) => (
            <CardContainer key={artist.id}>
              <ArtistCard artist={artist} />
            </CardContainer>
          ))}
      </Masonry>
    </Container>
  );
};

export default ArtistGrid;
