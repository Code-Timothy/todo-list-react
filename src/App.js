import { useState } from "react";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Learn some new English words!", done: false },
  { id: 2, content: "Watch a new movie!", done: true },
];

const hideDone = false;

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
