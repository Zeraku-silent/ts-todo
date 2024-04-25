import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ITask } from "../store/reducers/tasksReducer";
import { TaskCheckbox } from "./control/TaskCheckbox";
import { DeleteButton } from "./control/DeleteBtn";
type PropType = {
  task: ITask;
};

export const Task: React.FC<PropType> = ({ task }) => {

  return (
    <Card
      maxW={"30%"}
      minW={200}
      boxShadow="2xl"
      borderTop={"1px solid gray"}
      borderRadius={20}
    >
      <CardHeader h={"90%"}>
        <Stack>
          <TaskCheckbox />
          <Box mt={3}>
            <Heading fontSize={"x-large"}>{task.title}</Heading>
          </Box>
        </Stack>
      </CardHeader>
      <CardBody>
        <Text>
          {task.time} 
        </Text><DeleteButton  task = {task} />
      </CardBody>
    </Card>
  );
};
