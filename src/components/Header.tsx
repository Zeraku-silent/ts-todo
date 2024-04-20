import { Center, Heading } from "@chakra-ui/react";
import React from "react";

export const Header: React.FC = () => {
  return (
    <Center m={0} mt={5}>
      <Heading fontFamily={"fantasy"} color={"white"}>
        Список дел
      </Heading>
    </Center>
  );
};
