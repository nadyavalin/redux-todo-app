interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
  removeTodo: () => void;
  toggleTodoComplete: () => void;
}

export const TodoItem = ({ id, text, completed, removeTodo, toggleTodoComplete }: ITodoItem) => {
  return (
    <li>
      <li key={id}>
        <input type="checkbox" checked={completed} onChange={() => toggleTodoComplete()} />
        <span>{text}</span>
        <span className="delete" onClick={() => removeTodo()}>
          &times;
        </span>
      </li>
    </li>
  );
};
