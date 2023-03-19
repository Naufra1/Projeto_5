import "./Button.css";

function Button({ text, text2, type, classButton, handleOnClick }) {
  return (
    <button
      onClick={handleOnClick}
      type={type}
      className={`button ${classButton}`}
    >
      {text2}
      {text}
    </button>
  );
}

export default Button;
