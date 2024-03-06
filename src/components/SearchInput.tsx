import { useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder='Search Artists'
          variant='filled'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
