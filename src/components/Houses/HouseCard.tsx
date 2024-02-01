import { HouseType } from "@/context/AppContext";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

const HouseCard = ({ location, price, photo, owner }: HouseType) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={photo}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          className="object-cover w-full aspect-auto"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{owner}</Heading>
          <Text>{location}</Text>
          <Text color="blue.600" fontSize="2xl">
            {`$${price}`}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default HouseCard;
