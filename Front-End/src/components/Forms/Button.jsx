import "./Button.css";

function Button({ text, type, id, classButton }) {
  return (
    <>
      <button type={type} id={id} className={`button ${classButton}`}>
        {text}
      </button>
    </>
  );
}

export default Button;
