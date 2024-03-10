import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <Box width='300px' borderRadius={10}>
      {children}
    </Box>
  );
};

export default CardContainer;
