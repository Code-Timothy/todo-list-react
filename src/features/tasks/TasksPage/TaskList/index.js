import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import searchQueryParamName from "../searchQueryParamName";
import Item from "../../../../common/Item";
import { List, StyledLink, Button, Content, Input } from "./styled";
import {
  selectHideDone,
  selectTaskIsEdit,
  toggleTaskDone,
  removeTask,
  startEditTask,
  finishEditTask,
  selectTasksByQuery,
} from "../../tasksSlice";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));

  const hideDone = useSelector(selectHideDone);
  const taskIsEdit = useSelector(selectTaskIsEdit);

  const [editedContent, setEditedContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskIsEdit) {
      setEditedContent(taskIsEdit.content);
    }
  }, [taskIsEdit]);

  return (
    <List>
      {tasks.map((task) => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </Button>

          {taskIsEdit && taskIsEdit.id === task.id ? (
            <Input
              type="text"
              value={editedContent}
              onChange={({ target }) => setEditedContent(target.value)}
              onBlur={() => dispatch(finishEditTask({ taskId: task.id, newContent: editedContent }))}
            />
          ) : (
            <Content $done={task.done}>
              <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
            </Content>
          )}

          {(taskIsEdit && taskIsEdit.id === task.id) && (
            <Button
              onClick={() => dispatch(finishEditTask({ taskId: task.id, newContent: editedContent }))}
              $edit
            >
              ✔
            </Button>
          )}

          {!(taskIsEdit && taskIsEdit.id === task.id) && (
            <Button
              onClick={() => dispatch(startEditTask(task.id))}
              $edit
            >
              🖊
            </Button>
          )}

          <Button
            onClick={() => dispatch(removeTask(task.id))}
            $remove
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;