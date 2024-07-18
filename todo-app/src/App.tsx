import "./App.css";
import { useState } from "react";
import { TodoList } from "./components/todoList";
import { InputField } from "./components/inputField";
import { useAppDispatch } from "../src/hooks";
import { addTodo } from "./store/todoSlice";

export function App() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="App">
      <InputField value={text} handleInput={setText} handleSubmit={handleSubmit} />
      <TodoList />
    </div>
  );
}
