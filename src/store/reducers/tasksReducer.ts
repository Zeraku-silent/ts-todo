import { createSlice, nanoid } from "@reduxjs/toolkit";

export type ITask = {
  title: string;
  id: number | string;
  time: string;
  status?: boolean;
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
      const taskTime = new Date().toLocaleString();
      const taskId = nanoid();
      const task: ITask = {
        title: action.payload,
        id: taskId,
        time: taskTime,
        status: false,
      };
      state.list = [...state.list, task];
    },
  },
});

export default tasksReducer.reducer;

export const { addTask } = tasksReducer.actions;
