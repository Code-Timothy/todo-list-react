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

const hideDone = false;

function App() {
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
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
      />
    </Container>
  );
}

export default App;
