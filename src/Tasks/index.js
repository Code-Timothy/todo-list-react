import { StyledList, StyledItem, StyledButton, StyledParagraph } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <StyledList>
        {tasks.map(task => (
            <StyledItem key={task.id} hidden={hideDone && task.done}>
                <StyledButton
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </StyledButton>
                <StyledParagraph done={task.done}>
                    {task.content}
                </StyledParagraph>
                <StyledButton
                    onClick={() => removeTask(task.id)}
                    remove
                >
                    🗑
                </StyledButton>
            </StyledItem>
        ))}
    </StyledList>
);

export default Tasks;