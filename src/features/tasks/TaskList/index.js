import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, editTask, saveEditedTask } from "../tasksSlice";
import { List, Item, Button, Content, Input } from "./styled";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const [editedContent, setEditedContent] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const taskIsEdited = tasks.find(({ isEdit }) => isEdit === true);
    if (taskIsEdited) {
      setEditedContent(taskIsEdited.content);
    }
  }, [tasks]);

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

          {task.isEdit ? (
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

          {task.isEdit && (
            <Button
              onClick={() => dispatch(saveEditedTask({ id: task.id, newContent: editedContent }))}
              $edit
            >
              ✔
            </Button>
          )}

          {!task.isEdit && (
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