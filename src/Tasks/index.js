import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleDoneTask, toggleIsEdit, updateTaskContent }) => (
    <ul className="tasksList">
        {tasks.map((task) =>
            <li
                key={task.id}
                className={`tasksList__item ${task.done && hideDone ? "tasksList__item--hidden" : ""}`}
            >
                <button
                    className="tasksList__button"
                    onClick={() => toggleDoneTask(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className={`
                            ${task.done ? "tasksList__content--done" : ""} 
                            ${task.isEdited ? "tasksList__content--edited" : ""}
                        `}
                    contentEditable={task.isEdited ? true : false}
                    onBlur={(event) => updateTaskContent(task.id, event.target.innerText)}
                >
                    {task.content}
                </span>
                <button
                    className="tasksList__button tasksList__button--edit"
                    onClick={() => toggleIsEdit(task.id)}
                >
                    🖊
                </button>
                <button
                    className="tasksList__button tasksList__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        )}
    </ul>
);

export default Tasks;