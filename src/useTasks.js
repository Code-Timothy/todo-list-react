import { useLocalStorageState } from "./useLocalStorageState";

export const useTasks = () => {
    const [tasks, setTasks] = useLocalStorageState("tasks", [])

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }));
    };

    const editTask = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, isEdit: !task.isEdit }
            }

            return task;
        }));
    };

    const saveEditedTask = (id, newContent) => {
        if (!newContent.trim()) {
            return;
        }

        setTasks(tasks => tasks.map((task) => {
            if (task.id === id) {
                return { ...task, content: newContent, isEdit: false };
            }

            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
    };

    const sortTasks = () => {
        setTasks(tasks => [...tasks].sort((a, b) => a.content.localeCompare(b.content)));
    };

    const addNewTask = (newTaskContent) => {
        const greatestId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;

        setTasks(tasks => ([
            ...tasks,
            {
                id: greatestId + 1,
                content: newTaskContent,
                done: false,
            },
        ]));
    };

    return {
        tasks,
        removeTask,
        toggleTaskDone,
        editTask,
        saveEditedTask,
        setAllDone,
        sortTasks,
        addNewTask,
    };
};