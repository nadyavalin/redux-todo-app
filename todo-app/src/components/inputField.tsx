interface IInputField {
  text: string;
  handleInput: (input: string) => void;
  handleSubmit: () => void;
}

export const InputField = ({ text, handleInput, handleSubmit }: IInputField) => {
  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};
