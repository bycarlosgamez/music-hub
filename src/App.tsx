import { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ArtistGrid from './components/ArtistGrid';
// import GenreList from './components/GenreList';

export interface ArtistQuery {
  searchText: string;
}

export interface AccessToken {
  accessToken: string;
}

function App() {
  const [artistQuery, setArtistQuery] = useState<ArtistQuery>(
    {} as ArtistQuery
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar
          onSearch={(searchText) =>
            setArtistQuery({ ...artistQuery, searchText })
          }
        />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          {/* <GenreList /> */}
        </GridItem>
      </Show>
      <GridItem area='main'>
        <ArtistGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
