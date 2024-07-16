import { TodoItem } from "./todoItem";

interface ITodoList {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: ITodoList[];
  removeTodo: (id: string) => void;
  toggleTodoComplete: (id: string) => void;
}

export const TodoList = ({ todos, removeTodo, toggleTodoComplete }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          removeTodo={() => removeTodo(todo.id)}
          toggleTodoComplete={() => toggleTodoComplete(todo.id)}
          {...todo}
        />
      ))}
    </ul>
  );
};
