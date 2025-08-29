import { Text, Box, Container } from '@chakra-ui/react';
// import { wireframes, breakpoints } from '../constants/grid';
import useArtists from '../hooks/useArtists';

// import Masonry from 'react-masonry-css';
// import ArtistCard from './ArtistCard';
// import ArtistCardWireframe from './ArtistCardWireframe';
// import CardContainer from './CardContainer';
// import Header from './Header';

const ArtistGrid = () => {
  const { artists, error } = useArtists();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {artists.map((artist) => (
          <li key={artist.mbid}>{artist.name}</li>
        ))}
      </ul>
    </>
  );

  // <Container maxW='100%'>
  //   {!artists && <Text>{error}</Text>}
  //   {artists.length === 0 && <Header />}

  //   <Box p={2}>Main Artist Card Component</Box>

  //   <Masonry
  //     breakpointCols={breakpoints}
  //     className='my-masonry-grid'
  //     columnClassName='my-masonry-grid_column'
  //   >
  //     {isLoading &&
  //       wireframes.map((wireframe, i) => (
  //         <CardContainer key={i}>
  //           <ArtistCardWireframe key={wireframe} />
  //         </CardContainer>
  //       ))}

  //     {artists &&
  //       artists.map((artist) => (
  //         <CardContainer key={artist.id}>
  //           <ArtistCard artist={artist} />
  //         </CardContainer>
  //       ))}
  //   </Masonry>
  // </Container>
};

export default ArtistGrid;
