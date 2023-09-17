import { StyledList, StyledItem, StyledButton, StyledParagraph, RemoveButton } from "./styled";
import { useState } from "react";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone, editTask, setUpdatedContent, updatedContent }) => {
    const [editableTaskId, setEditableTaskId] = useState(null);

    const handleSave = (id) => {
        editTask(id);
        setEditableTaskId(null);
    };

    return (
        <StyledList>
            {tasks.map(task => (
                <StyledItem key={task.id} hidden={hideDone && task.done}>
                    <StyledButton
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✔" : ""}
                    </StyledButton>
                    {editableTaskId === task.id ? (
                        <>
                            <input
                                type="text"
                                value={updatedContent}
                                onChange={(event) => setUpdatedContent(event.target.value)}
                            />
                            <button onClick={() => setEditableTaskId(task.id)}>Edytuj</button>
                            <button onClick={() => handleSave(task.id)}>Zapisz</button>
                        </>
                    ) : (
                        <>
                            <StyledParagraph done={task.done}>
                                {task.content}
                            </StyledParagraph>
                            <button onClick={() => setEditableTaskId(task.id)}>Edytuj</button>
                        </>
                    )}
                    <RemoveButton
                        onClick={() => removeTask(task.id)}
                    >
                        🗑
                    </RemoveButton>
                </StyledItem>
            ))}
        </StyledList>
    )
};

export default Tasks;