import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: newTask }) => {
      tasks.push(newTask);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    removeTask: ({ tasks }, { payload: deleteTask }) => {
      const index = tasks.findIndex(({ id }) => id === deleteTask);
      tasks.splice(index, 1)
    },
    toggleTaskDone: ({ tasks }, { payload: toggleTask }) => {
      const index = tasks.findIndex(({ id }) => id === toggleTask);
      tasks[index].done = !tasks[index].done
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: () => { },

    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  removeTask,
  toggleTaskDone,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
  setTasks
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;