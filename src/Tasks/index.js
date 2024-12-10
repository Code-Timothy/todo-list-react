import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="tasksList">
        {tasks.map((task) => (
            <li className={`tasksList__item ${task.done && hideDone ? "tasksList__item--hidden" : ""}`}>
                <button className="tasksList__button">{task.done ? "✔" : ""}</button>
                <span className={task.done ? "tasksList__item--done" : ""}>{task.content}</span>
                <button className="tasksList__button tasksList__button--remove">🗑</button>
            </li>
        ))}
    </ul >
);

export default Tasks;