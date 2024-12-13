import { useState, useRef } from "react";
import { StyledForm, Button, Input } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();

        if (newTaskContentTrimmed !== "") {
            addNewTask(newTaskContentTrimmed);
            setNewTaskContent("");
            inputRef.current.focus();
        }
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                type="text"
                placeholder="Co jest do zrobienia?"
                ref={inputRef}
                required
                autoFocus
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form;