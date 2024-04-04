import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllTasksDone, sortTasks }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button
                className="buttons__button"
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons__button"
                onClick={setAllTasksDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
            <button
                className="buttons__button"
                onClick={sortTasks}
            >
                Sortuj zadania
            </button>
        </div>
    )
);

export default Buttons;