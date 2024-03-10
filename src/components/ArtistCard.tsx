import { FaSpotify } from 'react-icons/fa';
import {
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Icon,
  HStack,
} from '@chakra-ui/react';
import GenreTagList from './GenreTagList';
import PopularityScore from './PopularityScore';

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
  popularity: number;
}

const ArtistCard = ({ artist }: Props) => {
  return (
    <Card>
      <Image src={artist.images[0].url} borderTopRadius={10} />
      <CardBody>
        <Heading fontSize='2xl'>{artist.name}</Heading>
        <GenreTagList genres={artist.genres} />
        <HStack justifyContent='space-between'>
          <Link href={artist.external_urls.spotify} color='teal.500' isExternal>
            <Icon as={FaSpotify} mx={2} mb={-0.5} />
            Listen on Spotify
          </Link>
          <PopularityScore popularity={artist.popularity} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ArtistCard;
