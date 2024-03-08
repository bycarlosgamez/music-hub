import { FaSpotify } from 'react-icons/fa';
import { Card, CardBody, Heading, Image, Link, Icon } from '@chakra-ui/react';

import GenreTagList from './GenreTagList';

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
        <GenreTagList genres={artist.genres} />
        <Link href={artist.external_urls.spotify} color='teal.500' isExternal>
          <Icon as={FaSpotify} mx={2} mb={-0.5} />
          Listen on Spotify
        </Link>
      </CardBody>
    </Card>
  );
};

export default ArtistCard;
