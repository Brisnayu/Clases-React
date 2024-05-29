import { Grid, Center, GridItem, Heading } from "@chakra-ui/react";

const GridRock = () => {
  return (
    <>
      <Center>
        <Heading size="md" p={3}>
          Grid Example
        </Heading>
      </Center>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={5}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="tomato" />
      </Grid>
    </>
  );
};

export default GridRock;
