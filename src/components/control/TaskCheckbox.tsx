import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import { ImCheckmark } from "react-icons/im";
export const TaskCheckbox = () => {
  const [checked, setChecked] = useState<boolean>(false);
  console.log(checked);

  return (
    <Checkbox
      isChecked={checked}
      onChange={() => setChecked(!checked)}
      icon={<ImCheckmark />}
      size={"lg"}
      mr={"auto"}
      ml={"auto"}
      colorScheme="green"
    ></Checkbox>
  );
};
