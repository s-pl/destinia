import React from "react";

const FlightFilters = ({ sortBy, onSortChange }) => {
  return (
    <div className="filters">
      <label>
        Ordenar por:
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="price">Precio</option>
          <option value="duration">Duración</option>
          <option value="departure">Hora de salida</option>
        </select>
      </label>
    </div>
  );
};

export default FlightFilters;