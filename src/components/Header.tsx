import {Stack, Card, CardHeader, Heading, CardBody, Text} from '@chakra-ui/react'

const Header = () => {
  return (
    <Stack spacing='4'>
      <Card variant='ouline'>
        <CardHeader>
          <Heading size='md'>
            Find the best music recommendations on the internet
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>Look for an Artist or select a Genre</Text>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default Header;
