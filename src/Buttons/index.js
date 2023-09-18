import { StyledButtons, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, sortTasks }) => (
    <StyledButtons>
        {tasks.length > 0 && (
            <>
                <StyledButton
                    onClick={() => sortTasks()}
                >
                    Sortuj zadania
                </StyledButton>
                <StyledButton
                    onClick={() => toggleHideDone()}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </StyledButton>
                <StyledButton
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => setAllDone()}
                >
                    Ukończ wszystkie
                </StyledButton>
            </>
        )}
    </StyledButtons>
);

export default Buttons;