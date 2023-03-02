import "./Input.css";

function Input({ name, type, text, id, value, placeholder, handleOnChange }) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        key={id}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Input;
