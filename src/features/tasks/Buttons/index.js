import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import {
    selectHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    toggleHideDone,
    setAllDone,
    sortTasks
} from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
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
                disabled={isEveryTaskDone}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    );
};

export default Buttons;