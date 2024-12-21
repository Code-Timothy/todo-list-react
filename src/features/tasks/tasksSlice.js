import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach((task) => task.done = true);
        },
        editTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].isEdit = !tasks[index].isEdit;
        },
        saveEditedTask: (state, action) => {
            const { id, newContent } = action.payload;
            const index = state.tasks.findIndex(task => task.id === id);
            state.tasks[index].content = newContent;
            state.tasks[index].isEdit = false;
        },
        sortTasks: ({ tasks }) => {
            tasks.sort((a, b) => a.content.localeCompare(b.content));
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, editTask, saveEditedTask, sortTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const tasksReducer = tasksSlice.reducer;
