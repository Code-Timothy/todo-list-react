import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => {
    return (
        <ul className="tasksList">
            {tasks.map((task) =>
                <li className={`tasksList__item ${task.done && hideDoneTasks ? "tasksList__item--hidden" : ""}`}>
                    <button className="tasksList__button">
                        {task.done ? "✔" : ""}
                    </button>
                    <span className={`${task.done ? "tasksList__content--done" : ""}`}>
                        {task.content}
                    </span>
                    <button className="tasksList__button tasksList__button--edit">🖊</button>
                    <button className="tasksList__button tasksList__button--remove">🗑</button>
                </li>
            )}
        </ul>
    )
};

export default Tasks;