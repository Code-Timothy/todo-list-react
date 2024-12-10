import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasksList">
        {tasks.map((task) => (
            <li
                className={`tasksList__item ${task.done && hideDone ? "tasksList__item--hidden" : ""}`}
                key={task.id}
            >
                <button
                    className="tasksList__button"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={task.done ? "tasksList__item--done" : ""}>{task.content}</span>
                <button
                    className="tasksList__button tasksList__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;