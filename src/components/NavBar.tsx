import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/favicon.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding='1rem'>
      <Image src={logo} boxSize='40px' />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
