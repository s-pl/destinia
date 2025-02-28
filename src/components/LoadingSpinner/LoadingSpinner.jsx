import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Buscando vuelos...</p>
    </div>
  );
};

export default LoadingSpinner;