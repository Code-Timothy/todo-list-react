import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectHideDone, selectAreTasksEmpty, toggleHideDone, setAllDone, sortTasks } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const dispatch = useDispatch();

    return (
        !areTasksEmpty &&
        <StyledButtons>
            <Button
                onClick={() => dispatch(sortTasks())}
            >
                Sortuj alfabetycznie
            </Button>
            <Button
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={() => dispatch(setAllDone())}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    );
};

export default Buttons;