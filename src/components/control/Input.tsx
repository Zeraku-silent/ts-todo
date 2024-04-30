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

  const createTask = useCallback(() => {
    dispatch(addTask(input));
    setInput("");
  }, [dispatch, input]);
  return (
    <Box mr={"auto"} ml={"auto"} w={"30%"} minW={340} mt={5}>
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
        <Button
          onClick={createTask}
          bgGradient="linear(to-r, teal.200, green.600)"
          _hover={{
            bgGradient: "linear(to-r,  red.600, red.200)",
          }}
        >
          Добавить задачу
        </Button>
      </Stack>
    </Box>
  );
};
