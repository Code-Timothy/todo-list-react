import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id} className={`tasks__item ${hideDoneTasks && task.done ? "tasks__item--hidden" : ""}`}>
                <button className="tasks__button">{task.done ? "✔" : ""}</button>
                <p className={`tasks__taskContent ${task.done ? "tasks__item--done" : ""}`}>{task.content}</p>
                <button className="tasks__button tasks__button--remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;