import { StyledList, StyledItem, StyledButton, StyledParagraph, RemoveButton } from "./styled";

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
                <RemoveButton
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </RemoveButton>
            </StyledItem>
        ))}
    </StyledList>
);

export default Tasks;