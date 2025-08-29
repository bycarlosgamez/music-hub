import useGenres from '../hooks/useGenres';
import { List, ListItem, Spinner, Button, Icon } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import { useTokenContext } from '../hooks/useTokenContext';

const GenreList = () => {
  const accessToken = useTokenContext();
  const { genres, error, isLoading } = useGenres(accessToken);

  if (error) return;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.toString()} paddingY='5px'>
          <Button
            // onClick={() => onSelectGenre(genre)}
            fontSize='lg'
            variant='ghost'
          >
            {genre.toString()}
            <Icon as={FaChevronRight} ml={2} mr={-2} color='teal' />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
