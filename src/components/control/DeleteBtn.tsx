import { IconButton } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import { useAppDispatch } from "../../store/hook";
import { ITask, removeTask } from "../../store/reducers/tasksReducer";

type PropType = {
  task: ITask;
};

export const DeleteButton: React.FC<PropType> = ({ task }) => {
  const dispatch = useAppDispatch();

  const handleRemove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    dispatch(removeTask(task));
  };

  return (
    <IconButton
      onClick={handleRemove}
      isRound={true}
      bg={"white"}
      color={"red"}
      colorScheme="teal"
      aria-label="Call Segun"
      _hover={{}}
      _active={{ color: "green" }}
      icon={<ImCross />}
    />
  );
};
