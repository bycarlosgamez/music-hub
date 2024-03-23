import { useState, useEffect } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
// import ArtistGrid from './components/ArtistGrid';
import getAccessToken from './services/api-access-token';
import GenreList from './components/GenreList';

interface ArtistQuery {
  searchText: string;
}

function App() {
  const [accessToken, setAccessToken] = useState('');
  // const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [artistQuery, setArtistQuery] = useState<ArtistQuery>(
    {} as ArtistQuery
  );

  useEffect(() => {
    getAccessToken()
      .then((data) => setAccessToken(data.access_token))
      .catch((err) => console.log(err.message));
  }, []);

  console.log(accessToken);
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
          {/* <GenreList
            accessToken={accessToken}
            onSelectGenre={setSelectedGenre}
          /> */}
          aside
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GenreList accessToken={accessToken} />
        {/* <ArtistGrid accessToken={accessToken} /> */}
      </GridItem>
    </Grid>
  );
}

export default App;
