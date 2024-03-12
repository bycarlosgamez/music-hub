import { List, ListItem, Text } from '@chakra-ui/react';
import useFetchGenres from '../hooks/useFetchGenres';

interface Props {
  accessToken: string;
}

const GenreList = ({ accessToken }: Props) => {
  const { genres } = useFetchGenres(accessToken);

  console.log(genres);

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre} paddingY='5px'>
          <Text fontSize='lg'>{genre}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
