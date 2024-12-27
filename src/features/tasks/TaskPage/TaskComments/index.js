import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCommentToTask, getTaskById, removeTaskComment } from "../../tasksSlice";
import Item from "../../../../common/Item";
import Input from "../../../../common/Input";
import Button from "../../../../common/Button";
import { StyledList, StyledForm, StyledButton } from "./styled";

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
            <StyledForm>
                <Input
                    placeholder="Dodaj komentarz..."
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}
                />
                <StyledButton onClick={handleAddComment}>Dodaj komentarz</StyledButton>
            </StyledForm>
            <StyledList>
                {task.comments.map(comment => (
                    <Item
                        singleButton
                        key={comment.id}
                    >
                        {comment.content}
                        <Button
                            $remove
                            onClick={() => dispatch(removeTaskComment({ taskId: id, commentId: comment.id }))}
                        >
                            🗑
                        </Button>
                    </Item>
                ))}
            </StyledList>
        </>
    );
};

export default TaskComments;