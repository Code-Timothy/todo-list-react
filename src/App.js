import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Tile from "./Tile";

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

const hideDoneTasks = false;

function App() {
  return (
    <div className="container">
      <Header title="Lista zadań" />
      <Tile title="Dodaj nowe zadanie" body={<Form />} />
      <Tile
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </div>
  );
}

export default App;
