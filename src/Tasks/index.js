import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone, editTask, saveEditedTask }) => (
    <ul className="tasksList">
        {tasks.map((task) => (
            <li
                key={task.id}
                className={`tasksList__item ${task.done && hideDone ? "tasksList__item--hidden" : ""}`}
            >
                <button
                    className="tasksList__button"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>

                {task.isEdit ? (
                    <input
                        type="text"
                        defaultValue={task.content}
                        onBlur={({ target }) => saveEditedTask(task.id, target.value)}
                    />
                ) : (
                    <span className={task.done ? "tasksList__item--done" : ""}>
                        {task.content}
                    </span>
                )}

                {task.isEdit && (
                    <button
                        className="tasksList__button tasksList__button--edit"
                        onClick={({ target }) => saveEditedTask(task.id, target.value)}
                    >
                        ✔
                    </button>
                )}

                {!task.isEdit && (
                    <button
                        className="tasksList__button tasksList__button--edit"
                        onClick={() => editTask(task.id)}
                    >
                        🖊
                    </button>
                )}

                <button
                    className="tasksList__button tasksList__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;