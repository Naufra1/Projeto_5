import "./Input.css";

function Input({
  value,
  name,
  type,
  text,
  placeholder,
  pattern,
  customClass,
  handleOnChange,
}) {
  return (
    <div className={`box-input ${customClass}`}>
      <label htmlFor={name}>{text}</label>
      <input
        value={value}
        type={type}
        name={name}
        id={name}
        pattern={pattern}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Input;
