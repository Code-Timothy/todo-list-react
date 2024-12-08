import "./index.css";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  { id: 1, content: "testowe zadanie 1", done: false },
  { id: 2, content: "testowe zadanie 2", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <header className="header">
        <h1>Lista zadań</h1>
      </header>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
