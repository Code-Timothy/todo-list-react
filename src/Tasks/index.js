import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id} className={`tasks__item ${hideDone && task.done ? "tasks__item--hidden" : ""}`}>
                <button className="tasks__button">{task.done ? "✔" : ""}</button>
                <p className={`tasks__taskContent ${task.done ? "tasks__item--done" : ""}`}>{task.content}</p>
                <button
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;