import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCommentToTask, getTaskById } from "../../tasksSlice";

const TaskComments = () => {
    const { id } = useParams();
    const [comment, setComment] = useState("");
    const task = useSelector(state => getTaskById(state, id))
    const dispatch = useDispatch();

    const handleAddComment = () => {
        if (comment.trim() !== "") {
            dispatch(addCommentToTask({ taskId: id, comment }));
            setComment("");
        }
    };

    return (
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
    );
};

export default TaskComments;