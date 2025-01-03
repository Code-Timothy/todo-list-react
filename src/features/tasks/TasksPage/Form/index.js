import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, Button } from "./styled";
import Input from "../../../../common/Input";
import { addTask } from "../../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();

        if (newTaskContentTrimmed !== "") {
            dispatch(addTask({
                content: newTaskContentTrimmed,
                done: false,
                isEdit: false,
                id: nanoid(),
                comments: [],
            }));
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
    );
};

export default Form;