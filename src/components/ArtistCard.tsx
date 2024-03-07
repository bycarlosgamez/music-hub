import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';

interface Props {
  artist: Artist;
}

interface Images {
  height: number;
  url: string;
  width: number;
}

interface URLS {
  spotify: string;
}

interface Artist {
  id: number;
  name: string;
  images: Images[];
  genres: string[];
  external_urls: URLS;
}

const ArtistCard = ({ artist }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={artist.images[0].url} />
      <CardBody>
        <Heading fontSize='2xl'>{artist.name}</Heading>
        {artist.genres.map((genre) => (
          <Text>{genre}</Text>
        ))}
        <Text>{artist.external_urls.spotify}</Text>
      </CardBody>
    </Card>
  );
};

export default ArtistCard;
