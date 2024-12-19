import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  const {
    removeTask,
    toggleTaskDone,
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
            tasks={tasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
            editTask={editTask}
            saveEditedTask={saveEditedTask}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
