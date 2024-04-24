import { IconButton } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";

export const DeleteButton: React.FC = () => {
  return (
    <IconButton
      onClick={() => console.log("клик")}
      isRound={true}
      bg={"white"}
      color={"red"}
      colorScheme="teal"
      aria-label="Call Segun"
      _hover={"none"}
      _active={{color:'blue'}}
      icon={<ImCross />}
    />
  );
};
