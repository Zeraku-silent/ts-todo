import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useCallback } from "react";

export const TaskInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.list);

  const addTask = useCallback(() => {
    // dispatch(addTask({text,id}))
  }, []);
  return (
    <Box mr={"auto"} ml={"auto"} w={"30%"} mt={5}>
      <Stack direction={"row"}>
        <Input
          bg={"white"}
          fontFamily={"fantasy"}
          color={"white"}
          placeholder="Что будем делать?"
        ></Input>
        <Button bg={"white"}>Добавить</Button>
      </Stack>
    </Box>
  );
};
