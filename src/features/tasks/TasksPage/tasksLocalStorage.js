const localStorageKey = "tasks";

export const saveTasksInLocalStorage = tasks => {
    return localStorage.setItem(localStorageKey, JSON.stringify(tasks));
};

export const getTasksFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
};