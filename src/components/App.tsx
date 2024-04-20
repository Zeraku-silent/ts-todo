import React from "react";
import { Header } from "./Header";
import { Box } from "@chakra-ui/react";
import { TaskInput } from "./Input";

const App: React.FC = () => {
  return (
    <Box className="App">
      <Header />
      <TaskInput />
    </Box>
  );
};

export { App };
