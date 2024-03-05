import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<SearchIcon />} />
      <Input borderRadius={20} placeholder='Search Artists' variant='filled' />
    </InputGroup>
  );
};

export default SearchInput;
