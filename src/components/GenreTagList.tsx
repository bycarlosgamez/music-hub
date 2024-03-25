import { Wrap, Tag } from '@chakra-ui/react';
import { Genre } from '../hooks/useArtists';

interface Props {
  genres: Genre[];
}

const GenreChipList = ({ genres }: Props) => {
  return (
    <Wrap spacing={2} my={2}>
      {genres.map(({ genre }) => (
        <Tag key={genre} size='sm' borderRadius='full'>
          {genre}
        </Tag>
      ))}
    </Wrap>
  );
};

export default GenreChipList;
