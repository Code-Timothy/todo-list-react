import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach((task) => task.done = true);
        },
        startEditTask: ({ tasks }, { payload: taskId }) => {
            tasks.forEach(task => task.isEdit = false);
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].isEdit = true;
        },
        finishEditTask: ({ tasks }, { payload: { taskId, newContent } }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].content = newContent;
            tasks[index].isEdit = false;
        },
        sortTasks: ({ tasks }) => {
            tasks.sort((a, b) => a.content.localeCompare(b.content));
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    startEditTask,
    finishEditTask,
    sortTasks,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectTaskIsEdit = state => selectTasks(state).find(({ isEdit }) => isEdit);

export const tasksReducer = tasksSlice.reducer;
