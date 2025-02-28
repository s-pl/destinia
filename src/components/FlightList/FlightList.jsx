import React from "react";
import FlightCard from "../FlightCard/FlightCard"

const FlightsList = ({ flights }) => {
  if (flights.length === 0) {
    return (
      <div className="no-flights">
        <p>No se encontraron vuelos para tu búsqueda.</p>
        <p>Intenta con otras fechas o destinos.</p>
      </div>
    );
  }

  return (
    <div className="flights-list">
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightsList;