import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="tasksList">
        {tasks.map((task) =>
            <li
                key={task.id}
                className={`tasksList__item ${task.done && hideDone ? "tasksList__item--hidden" : ""}`}
            >
                <button className="tasksList__button">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "tasksList__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasksList__button tasksList__button--edit">🖊</button>
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