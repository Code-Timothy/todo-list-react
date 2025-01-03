import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import {
    selectHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    toggleHideDone,
    setAllDone,
    sortTasks,
    fetchExampleTasksRequest,
    selectLoading,
} from "../../tasksSlice";

const Buttons = ({ singleButton }) => {
    const hideDone = useSelector(selectHideDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {singleButton ? (
                <Button
                    onClick={() => dispatch(fetchExampleTasksRequest())}
                    disabled={loading}
                >
                    {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
                </Button>
            ) : (
                !areTasksEmpty &&
                <>
                    <Button onClick={() => dispatch(sortTasks())}>
                        Sortuj alfabetycznie
                    </Button>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button onClick={() => dispatch(setAllDone())} disabled={isEveryTaskDone}>
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    );
};

export default Buttons;