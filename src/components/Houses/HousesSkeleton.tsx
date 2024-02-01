import { Skeleton, Stack } from "@chakra-ui/react";

const HousesSkeleton = () => {
  return (
    <Stack className="w-full">
      <Skeleton height="60px" />
      <Skeleton height="20px" width="50%" />
      <Skeleton height="20px" />
      <Skeleton height="30px" width="20%" />
    </Stack>
  );
};

export default HousesSkeleton;
