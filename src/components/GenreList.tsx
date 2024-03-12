import { List, ListItem, Text, Spinner } from '@chakra-ui/react';
import useFetchGenres from '../hooks/useFetchGenres';

interface Props {
  accessToken: string;
}

const GenreList = ({ accessToken }: Props) => {
  const { genres, isLoading, error } = useFetchGenres(accessToken);

  if (error) return null;
  if (isLoading) return <Spinner />;

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
