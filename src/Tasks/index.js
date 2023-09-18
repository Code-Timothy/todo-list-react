import { StyledList, StyledItem, StyledButton, StyledParagraph, RemoveButton, EditButton, Input } from "./styled";
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
                            <Input
                                type="text"
                                value={updatedContent}
                                onChange={(event) => setUpdatedContent(event.target.value)}
                            />
                            <EditButton onClick={() => handleSave(task.id)}>✔</EditButton>
                        </>
                    ) : (
                        <>
                            <StyledParagraph done={task.done}>
                                {task.content}
                            </StyledParagraph>
                            <EditButton onClick={() => setEditableTaskId(task.id)}>🖍</EditButton>
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