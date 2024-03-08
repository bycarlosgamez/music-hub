import { Badge, Text } from '@chakra-ui/react';

interface Props {
  popularity: number;
}

const PopularityScore = ({ popularity }: Props) => {
  let color = popularity > 75 ? 'green' : popularity > 60 ? 'yellow' : 'red';
  return (
    <Text fontWeight='bold' fontSize='10px'>
      Popularity
      <Badge
        ml='1'
        colorScheme={color}
        fontSize='14px'
        paddingX={2}
        borderRadius='4px'
      >
        {popularity}
      </Badge>
    </Text>
  );
};

export default PopularityScore;
