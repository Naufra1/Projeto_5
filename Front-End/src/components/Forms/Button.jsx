import "./Button.css";

function Button({ text, type, classButton }) {
  return (
      <button type={type} className={`button ${classButton}`}>  
        {text}
      </button>
  );
}

export default Button;