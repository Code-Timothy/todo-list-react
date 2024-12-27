import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import { addCommentToTask, getTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    const handleAddComment = () => {
        if (comment.trim() !== "") {
            dispatch(addCommentToTask({ taskId: id, comment }));
            setComment("");
        }
    };

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😥"}
                body={
                    <>
                        <strong>Ukończono: </strong> {task ? (task.done ? "Tak" : "Nie") : ""}
                    </>
                }
            />
            <Section
                title="Komentarze do zadania"
                body={
                    <>
                        <ul>
                            {task.comments.map(comment => (
                                <li key={comment.id}>
                                    {comment.content}
                                </li>
                            ))}
                        </ul>
                        <textarea
                            placeholder="Dodaj komentarz..."
                            value={comment}
                            onChange={({ target }) => setComment(target.value)}
                        />
                        <button onClick={handleAddComment}>Dodaj komentarz</button>
                    </>
                }
            />
        </Container>
    );
};

export default TaskPage;