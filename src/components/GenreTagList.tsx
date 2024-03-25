import { Wrap, Tag } from '@chakra-ui/react';
import { Genre } from '../hooks/useArtists';

interface Props {
  genres: Genre[];
}

const GenreChipList = ({ genres }: Props) => {
  return (
    <Wrap spacing={2} my={2}>
      {genres.map((genre) => (
        <Tag key={genre.toString()} size='sm' borderRadius='full'>
          {genre.toString()}
        </Tag>
      ))}
    </Wrap>
  );
};

export default GenreChipList;
