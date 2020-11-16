import React from "react";
import "./ErroComponent.css";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

const ErrorComponent = () => {
  return (
    <div className="eror-componont">
      <h1>Pagina nu a fost găsită</h1>
      <Link className="error-btn" to="/">
        Pagina de start
      </Link>
    </div>
  );
};

export default ErrorComponent;
