import { useState, useEffect } from 'react';

export const useTasks = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
    const [hideDone, setHideDone] = useState(JSON.parse(localStorage.getItem("hideDone")) || false);
    const [updatedContent, setUpdatedContent] = useState("");

    useEffect(() => {
        localStorage.setItem("hideDone", JSON.stringify(hideDone));
    }, [hideDone]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const editTask = (id) => {
        setTasks((tasks) => {
            const updatedTasks = tasks.map((task) => {
                if (id === task.id) {
                    return {
                        ...task,
                        content: updatedContent,
                    };
                }
                return task;
            });
            return updatedTasks;
        });
        setUpdatedContent("");
    };

    const sortTasks = () => {
        const sortedTasks = [...tasks];
        sortedTasks.sort((a, b) => a.content.localeCompare(b.content));
        setTasks(sortedTasks);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done,
                }
            }
            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks.map((task) => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks((tasks) => ([
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]));
    };

    return ({
        tasks,
        hideDone,
        sortTasks,
        toggleHideDone,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
        editTask,
        setUpdatedContent,
        updatedContent,
    });
};