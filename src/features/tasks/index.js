import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";

function Tasks() {
  const {
    removeTask,
    editTask,
    saveEditedTask,
    setAllDone,
    sortTasks,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
            sortTasks={sortTasks}
          />
        }
        body={
          <TaskList
            removeTask={removeTask}
            editTask={editTask}
            saveEditedTask={saveEditedTask}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
