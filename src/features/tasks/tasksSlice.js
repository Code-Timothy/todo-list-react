import { createSlice, nanoid } from "@reduxjs/toolkit";
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
        fetchExampleTasksRequest: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.loading = false;
            state.tasks = tasks;
        },
        addCommentToTask: ({ tasks }, { payload: { taskId, comment } }) => {
            const task = tasks.find(({ id }) => id === taskId);

            if (task) {
                task.comments.push({ content: comment, id: nanoid() });
            }
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
    fetchExampleTasksRequest,
    fetchExampleTasksSuccess,
    addCommentToTask,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectLoading = state => selectTasksState(state).loading;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectTaskIsEdit = state => selectTasks(state).find(({ isEdit }) => isEdit);

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};

export const tasksReducer = tasksSlice.reducer;
