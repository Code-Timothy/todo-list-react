import { useTasks } from "./useTasks";
import { StyledContainer } from "./styled";
import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Buttons from "./Buttons";
import Tile from "./Tile";

function App() {

  const {
    tasks,
    hideDone,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    editTask,
    setUpdatedContent,
    updatedContent,
  } = useTasks();

  return (
    <StyledContainer>
      <Header title="Lista zadań" />
      <Tile
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Tile
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
            editTask={editTask}
            setUpdatedContent={setUpdatedContent}
            updatedContent={updatedContent}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </StyledContainer>
  );
}

export default App;
