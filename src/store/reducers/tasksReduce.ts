import { createSlice } from "@reduxjs/toolkit";

interface ITask {
  title: string | number;
  id: number | string;
  time: Date | number;
  status: boolean;
  [key: string]: string | number | boolean;
}
const a: ITask = {
  title: "asd",
  id: 2,
  status: true,
};

const tasksReducer = createSlice({
  name: "tasks",
});
