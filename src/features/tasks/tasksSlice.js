import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
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
        editTask: ({ tasks }, { payload: taskId }) => {
            tasks.forEach(task => task.isEdit = false);
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].isEdit = true;
        },
        saveEditedTask: ({ tasks }, action) => {
            const { id, newContent } = action.payload;
            const index = tasks.findIndex((task) => task.id === id);
            tasks[index].content = newContent;
            tasks[index].isEdit = false;
        },
        sortTasks: ({ tasks }) => {
            tasks.sort((a, b) => a.content.localeCompare(b.content));
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    editTask,
    saveEditedTask,
    sortTasks,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectTaskIsEdit = state => selectTasks(state).find(({ isEdit }) => isEdit);

export const tasksReducer = tasksSlice.reducer;
