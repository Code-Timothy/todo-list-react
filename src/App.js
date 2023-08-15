import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Tile from "./Tile";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
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

  return (
    <Container>
      <Header title="Lista zadań" />
      <Tile
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Tile
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
