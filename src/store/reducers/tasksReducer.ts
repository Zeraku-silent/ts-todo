import { createSlice, nanoid } from "@reduxjs/toolkit";

type ITask = {
  title: string | number;
  id: number | string;
  time: string | number;
  status: boolean;
  [key: string]: string | number | boolean;
};

type TasksState = {
  list: ITask[];
};

const initialState: TasksState = {
  list: [],
};

const tasksReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const taskTime = Date();
      const taskId = nanoid();
      const task: ITask = {
        title: action.payload.title,
        id: taskId,
        time: taskTime,
        status: action.payload.status,
      };
      state.list = { ...state.list, ...task };
    },
  },
});

export default tasksReducer.reducer;

export const { addTask } = tasksReducer.actions;
