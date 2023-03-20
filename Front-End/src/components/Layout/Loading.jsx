import "./Loading.css";
// import loading from "../../Img/loading.svg";
const loading = require('../../img/loading.svg')

function Loading() {
  return (
    <div className="loader">
      <img className="loader__img" src={loading} alt="Loading" />
    </div>
  );
}

export default Loading;
