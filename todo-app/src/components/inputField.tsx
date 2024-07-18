interface InputFieldProps {
  value: string;
  handleInput: (input: string) => void;
  handleSubmit: () => void;
}

export const InputField = ({ value, handleInput, handleSubmit }: InputFieldProps) => {
  return (
    <label>
      <input placeholder="new todo" value={value} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};
