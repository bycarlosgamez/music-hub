import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface Props {
  artist: Artist;
}

interface Images {
  height: number;
  url: string;
  width: number;
}

interface Artist {
  id: number;
  name: string;
  images: Images[];
}

const ArtistCard = ({ artist }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={artist.images[0].url} />
      <CardBody>
        <Heading fontSize='2xl'>{artist.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ArtistCard;
