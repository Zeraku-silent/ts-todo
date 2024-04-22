import React from "react";
import { Header } from "./Header";
import { Box } from "@chakra-ui/react";
import { TaskInput } from "./control/Input";
import { TaskList } from "./TaskList";

const App: React.FC = () => {
  return (
    <Box className="App">
      <Header />
      <TaskInput />
      <TaskList></TaskList>
    </Box>
  );
};

export { App };
