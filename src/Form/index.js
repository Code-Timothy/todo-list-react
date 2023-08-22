import { useState, useRef } from "react";
import { StyledForm, StyledButton, StyledInput } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                type="text"
                placeholder="Co jest do zrobienia ?"
                ref={inputRef}
                value={newTaskContent}
                onChange={(event) => { setNewTaskContent(event.target.value) }}
                autoFocus
            />
            <StyledButton onClick={() => focusInput()}>Dodaj zadanie</StyledButton>
        </StyledForm>
    )
};

export default Form;