import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
    },
});

export const { addTask, toggleHideDone } = tasksSlice.actions
export const selectTasks = state => state.tasks;
export const tasksReducer = tasksSlice.reducer;
