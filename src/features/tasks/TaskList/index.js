import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, editTask } from "../tasksSlice";
import { List, Item, Button, Content, Input } from "./styled";

const TaskList = ({ saveEditedTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

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
              defaultValue={task.content}
              onBlur={({ target }) => saveEditedTask(task.id, target.value)}
            />
          ) : (
            <Content $done={task.done}>
              {task.content}
            </Content>
          )}

          {task.isEdit && (
            <Button
              onClick={({ target }) => saveEditedTask(task.id, target.value)}
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
  )
};

export default TaskList;