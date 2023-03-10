import "./Input.css";

function Input({ name, type, text, placeholder, pattern, required, handleOnChange }) {
  return (
    <div className="box-input">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        pattern={pattern}
        placeholder={placeholder}
        onChange={handleOnChange}
        required
      />
    </div>
  );
}

export default Input;
