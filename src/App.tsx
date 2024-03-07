import { useState, useEffect } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ArtistGrid from './components/ArtistGrid';
import getAccessToken from './services/api-access-token';

interface ArtistQuery {
  searchText: string;
}

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [artistQuery, setArtistQuery] = useState<ArtistQuery>(
    {} as ArtistQuery
  );

  useEffect(() => {
    getAccessToken()
      .then((data) => setAccessToken(data.access_token))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
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
        <GridItem area='aside'>Aside</GridItem>
      </Show>
      <GridItem area='main'>
        <ArtistGrid accessToken={accessToken} />
      </GridItem>
    </Grid>
  );
}

export default App;
