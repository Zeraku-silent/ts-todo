import { Checkbox } from "@chakra-ui/react";
import { RiCheckboxCircleLine } from "react-icons/ri";
export const TaskCheckbox = () => {
  return (
    <Checkbox
      icon={<RiCheckboxCircleLine />}
      size={"lg"}
      mr={"auto"}
      ml={"auto"}
      colorScheme={"green"}
    ></Checkbox>
  );
};
