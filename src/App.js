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
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
