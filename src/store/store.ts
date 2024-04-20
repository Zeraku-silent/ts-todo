import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasksReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
