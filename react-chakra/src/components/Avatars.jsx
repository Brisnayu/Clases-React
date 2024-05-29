import { Wrap, WrapItem, Avatar, Center, Heading } from "@chakra-ui/react";

const Avatars = () => {
  return (
    <Center mt={10}>
      <Heading size="md" mb={4} px={10} pt={3}>
        How to generate Avatars?
      </Heading>

      <Wrap>
        <WrapItem>
          <Avatar
            name="Hera"
            src="https://i.pinimg.com/originals/b9/3c/2d/b93c2d3d3811101877449aa397506bab.gif"
          />
        </WrapItem>
        <WrapItem>
          <Avatar
            name="Gatito"
            src="https://i.pinimg.com/originals/cb/b4/d4/cbb4d4bf8bcfba01cf894090522463f8.gif"
          />
        </WrapItem>

        <WrapItem>
          <Avatar
            name="Gatito"
            src="https://i.pinimg.com/originals/6e/34/f0/6e34f0027ae54a25873e2e07cf0aafb2.gif"
          />
        </WrapItem>
        <WrapItem>
          <Avatar
            name="Gatito"
            src="https://i.pinimg.com/originals/fe/58/bc/fe58bc71e2f268cee0743a63f5416747.gif"
          />
        </WrapItem>
        <WrapItem>
          <Avatar
            name="Gatito"
            src="https://i.pinimg.com/originals/9a/dc/ae/9adcae81022a76ab49b1058836be70ab.gif"
          />
        </WrapItem>
      </Wrap>
    </Center>
  );
};

export default Avatars;
