import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    loading: false,
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
    fetchExampleTasks: (state) => {
      state.loading = true;
    },

    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },

    fetchExampleTasksError: (state) => {
      state.loading = false;
    },

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
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  setTasks
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => state.tasks;
export const selectLoading = (state) => selectTasksState(state).loading;
export default tasksSlice.reducer;