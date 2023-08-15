import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Tile from "./Tile";
import Container from "./Container";

const tasks = [
  {
    id: 1,
    content: "przykładowe zadanie 1",
    done: false,
  },
  {
    id: 2,
    content: "przykładowe zadanie 2",
    done: true,
  },
];

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "przykładowe zadanie 1",
      done: false,
    },
    {
      id: 2,
      content: "przykładowe zadanie 2",
      done: true,
    },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  return (
    <Container>
      <Header title="Lista zadań" />
      <Tile
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Tile
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
