import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = ({ setAllDone, sortTasks }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 &&
        <StyledButtons>
            <Button
                onClick={sortTasks}
            >
                Sortuj alfabetycznie
            </Button>
            <Button
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    )
};

export default Buttons;