import Form from "./Form";
import Tasks from "./Tasks";

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
      <h1 className="header">Lista zadań</h1>
      <div className="tile">
        <div className="tile__headerContainer">
          <h2 className="tile__header">Dodaj nowe zadanie</h2>
        </div>
        <Form />
      </div>
      <div className="tile">
        <div className="tile__headerContainer">
          <h2 className="tile__header">Lista zadań</h2>
          <div className="tile__buttonsContainer"></div>
        </div>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </div>
    </div>
  );
}

export default App;
