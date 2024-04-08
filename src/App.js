import { useState, useEffect } from "react";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const getTasksFromLocalStorage = localStorage.getItem("tasks");
  const getHideDoneFromLocalStorage = localStorage.getItem("hideDone");

  const [hideDone, setHideDone] = useState(
    getHideDoneFromLocalStorage
      ? JSON.parse(getHideDoneFromLocalStorage)
      : false
  );

  const [tasks, setTasks] = useState(
    getTasksFromLocalStorage
      ? JSON.parse(getTasksFromLocalStorage)
      : [
        { id: 1, content: "learn some new English words!", done: false, isEdited: false, },
        { id: 2, content: "watch a new movie", done: true, isEdited: false, },
      ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("hideDone", JSON.stringify(hideDone));
  }, [hideDone]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleDoneTask = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllTasksDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content: newTaskContent,
        done: false,
      },
    ]);
  };

  const toggleIsEdit = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, isEdited: !task.isEdited };
      }

      return task;
    }));
  };

  const updateTaskContent = (id, newContent) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, content: newContent, isEdited: false };
      }

      return task;
    }));
  };

  const getTasksContent = () => {
    return tasks.map(task => task.content);
  };

  const sortTasks = () => {
    const tasksContent = getTasksContent();
    const sortedContents = [...tasksContent].sort();
    const sortedTasks = sortedContents.map(content => {
      return tasks.find(task => task.content === content);
    });
    const updatedTasks = sortedTasks.map((task, index) => ({ ...task, id: index + 1 }));
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllTasksDone={setAllTasksDone}
            sortTasks={sortTasks}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleDoneTask={toggleDoneTask}
            toggleIsEdit={toggleIsEdit}
            updateTaskContent={updateTaskContent}
          />
        }
      />
    </Container>
  );
}

export default App;
