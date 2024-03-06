import { Text } from '@chakra-ui/react';
import useFetchArtists from '../hooks/useFetchArtists';

interface Props {
  accessToken: string;
}

const ArtistGrid = ({ accessToken }: Props) => {
  const { artists, error } = useFetchArtists(accessToken);

  return (
    <>
      {!artists && <Text>{error}</Text>}
      <ul>
        {artists &&
          artists.map((artist) => <li key={artist.id}>{artist.name}</li>)}
      </ul>
    </>
  );
};

export default ArtistGrid;
