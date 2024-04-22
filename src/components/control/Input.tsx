import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { useAppDispatch } from "../../store/hook";
import { useCallback, useState } from "react";
import { addTask } from "../../store/reducers/tasksReducer";

export const TaskInput: React.FC = () => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState<string>("");

  const handleSubmit: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      createTask();
    }
  };
  // console.log(tasks);

  const createTask = useCallback(() => {
    dispatch(addTask(input));
    setInput("");
  }, [dispatch, input]);
  return (
    <Box mr={"auto"} ml={"auto"} w={"30%"} mt={5}>
      <Stack direction={"row"}>
        <Input
          onKeyDown={handleSubmit}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          bg={"white"}
          fontFamily={"fantasy"}
          color={"black"}
          placeholder="Что будем делать?"
        ></Input>
        <Button onClick={createTask} bg={"white"}>
          Добавить
        </Button>
      </Stack>
    </Box>
  );
};
