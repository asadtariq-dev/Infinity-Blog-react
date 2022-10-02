import { Spinner } from "react-bootstrap";
import "../App.css";

function Loader() {
  return (
    <>
      <div className="spinner">
        <Spinner animation="grow" variant="primary" size="lg" />
        <Spinner animation="grow" variant="primary" size="lg" />
        <Spinner animation="grow" variant="primary" size="lg" />
      </div>
      <p className="text-center text-secondary">
        Please make sure your server is running
      </p>
    </>
  );
}

export default Loader;
