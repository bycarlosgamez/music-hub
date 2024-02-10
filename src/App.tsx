import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gap={6}
    >
      <GridItem area='nav' bg='teal' />
      <Show above='lg'>
        <GridItem area='aside' bg='tomato' />
      </Show>
      <GridItem area='main' bg='papayawhip' />
    </Grid>
  );
}

export default App;
