import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectHideDone, selectTaskIsEdit, toggleTaskDone, removeTask, editTask, saveEditedTask } from "../tasksSlice";
import { List, Item, Button, Content, Input } from "./styled";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
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
              onBlur={() => dispatch(saveEditedTask({ id: task.id, newContent: editedContent }))}
            />
          ) : (
            <Content $done={task.done}>
              {task.content}
            </Content>
          )}

          {(taskIsEdit && taskIsEdit.id === task.id) && (
            <Button
              onClick={() => dispatch(saveEditedTask({ id: task.id, newContent: editedContent }))}
              $edit
            >
              ✔
            </Button>
          )}

          {!(taskIsEdit && taskIsEdit.id === task.id) && (
            <Button
              onClick={() => dispatch(editTask(task.id))}
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