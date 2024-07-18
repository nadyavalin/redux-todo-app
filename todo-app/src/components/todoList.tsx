import { useAppSelector } from "../../src/hooks";
import { TodoItem } from "./todoItem";

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
