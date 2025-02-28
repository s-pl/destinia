import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error">
      <p>{message}</p>
      <button onClick={() => window.location.reload()}>
        Intentar de nuevo
      </button>
    </div>
  );
};

export default ErrorMessage;