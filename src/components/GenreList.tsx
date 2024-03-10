import useFetchGenres from '../hooks/useFetchGenres';

interface Props {
  accessToken: string;
}

const GenreList = ({ accessToken }: Props) => {
  const { genres } = useFetchGenres(accessToken);

  console.log(genres);

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
  );
};

export default GenreList;
