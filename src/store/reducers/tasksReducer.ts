import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

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
    addTask(state, action: PayloadAction<string>) {
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
    removeTask(state, action: PayloadAction<ITask>) {
      state.list = state.list.filter((task) => task.id !== action.payload.id);
    },
  },
});

export default tasksReducer.reducer;

export const { addTask, removeTask } = tasksReducer.actions;
