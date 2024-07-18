import { useAppDispatch } from "../../src/hooks";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

export const TodoItem = ({ id, title, completed }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <li>
      <li key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodoComplete(id))}
        />
        <span>{title}</span>
        <span className="delete" onClick={() => dispatch(removeTodo(id))}>
          &times;
        </span>
      </li>
    </li>
  );
};
