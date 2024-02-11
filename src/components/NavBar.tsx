import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/favicon.svg';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='1rem'>
      <Image src={logo} boxSize='60px'></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
