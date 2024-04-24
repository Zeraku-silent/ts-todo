import {
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
      boxShadow="2xl"
      borderTop={"1px solid gray"}
      borderRadius={20}
    >
      <CardHeader h={"90%"}>
        <Stack>
          <TaskCheckbox />
          <Heading fontSize={"x-large"}>{task.title}</Heading>
        </Stack>
      </CardHeader>
      <CardBody>
        <DeleteButton />
        <Text>{task.time}</Text>
      </CardBody>
    </Card>
  );
};
