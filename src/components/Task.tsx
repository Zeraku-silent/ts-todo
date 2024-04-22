import { Box, Heading } from "@chakra-ui/react";
import { ITask } from "../store/reducers/tasksReducer";
type PropType = {
  task: ITask;
};

export const Task: React.FC<PropType> = ({ task }) => {
  return (
    <Box bg={"gray.600"} borderRadius={20}>
      <Heading m={10}>{task.title}</Heading>
    </Box>
  );
};
