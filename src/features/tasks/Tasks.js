import { useState } from "react";
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
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
            sortTasks={sortTasks}
          />
        }
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
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
