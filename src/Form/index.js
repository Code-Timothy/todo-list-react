import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            return;
        }

        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form onSubmit={onFormSubmit} className="form">
            <input
                type="text"
                className="form__input"
                placeholder="Co jest do zrobienia ?"
                value={newTaskContent}
                onChange={(event) => { setNewTaskContent(event.target.value) }}
                autoFocus
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;