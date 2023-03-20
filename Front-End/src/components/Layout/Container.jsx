import "./Container.css";

function Container(props) {
  return (
    <div className={`container-pages ${props.customClass}`} >{props.children}</div>
  );
}

export default Container;
