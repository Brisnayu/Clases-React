import { Stack, Code } from "@chakra-ui/react";

const CodeRock = () => {
  return (
    <Stack direction="row" my={5} px={10}>
      <Code colorScheme="pink" children="console.log('Welcome to chakra')" />
    </Stack>
  );
};

export default CodeRock;
