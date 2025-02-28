import React from "react";
import { formatDate } from "../../utils/formatUtils";

const SearchInfo = ({ origen, destino, salida, regreso, pasajeros }) => {
  return (
    <>
      <h1>Vuelos de {origen} a {destino}</h1>
      
      <div className="search-info">
        <p>Salida: {formatDate(salida)} {regreso && `• Regreso: ${formatDate(regreso)}`} • Pasajeros: {pasajeros}</p>
      </div>
    </>
  );
};

export default SearchInfo;