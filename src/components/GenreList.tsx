import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

import { List, ListItem, Spinner, Button, Icon } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

interface Props {
  accessToken: string;
}

interface Genre {
  genre: string;
}

interface FetchGenresResponse {
  genres: string[];
}

const GenreList = ({ accessToken }: Props) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGenresResponse, any>('/recommendations/available-genre-seeds', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err.message));
  }, [accessToken]);

  console.log(genres);

  // if (isLoading) return <Spinner />;

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
