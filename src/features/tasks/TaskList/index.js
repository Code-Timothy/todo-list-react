import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { List, Item, Button, Content, Input } from "./styled";

const TaskList = ({ removeTask, toggleTaskDone, editTask, saveEditedTask }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <List>
      {tasks.map((task) => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => toggleTaskDone(task.id)}
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
              onClick={() => editTask(task.id)}
              $edit
            >
              🖊
            </Button>
          )}

          <Button
            onClick={() => removeTask(task.id)}
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