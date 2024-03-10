import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const ArtistCardWireframe = () => {
  return (
    <Card>
      <Skeleton height='200px' borderTopRadius={10} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default ArtistCardWireframe;
