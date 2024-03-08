import { Wrap, Tag } from '@chakra-ui/react';

interface Props {
  genres: string[];
}

const GenreChipList = (genres: Props) => {
  return (
    <Wrap spacing={2} my={2}>
      {genres.genres.map((genre) => (
        <Tag key={genre} size='sm' borderRadius='full'>
          {genre}
        </Tag>
      ))}
    </Wrap>
  );
};

export default GenreChipList;
