import { Box, Flex } from "@chakra-ui/react";
import { useAppSelector } from "../store/hook";
import { Task } from "./Task";

export const TaskList: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.list);
  console.log(tasks);

  return (
    <Box mt={10}>
      <Flex wrap={"wrap"} justify={"center"} gap={10}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </Flex>
    </Box>
  );
};
