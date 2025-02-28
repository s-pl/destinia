import React from "react";
import { formatTime, formatDuration } from "../../utils/formatUtils";

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <div className="flight-header">
        <img 
          src={flight.logo} 
          alt={flight.airline}
        />
        <div>
          <h3>{flight.airline}</h3>
          <p>{flight.id} • {flight.class}</p>
        </div>
      </div>

      <div className="flight-main">
        <div className="departure">
          <p className="time">{formatTime(flight.departure.time)}</p>
          <p>{flight.departure.code}</p>
          <p>{flight.departure.city}</p>
        </div>
        
        <div className="flight-path">
          <p>{formatDuration(flight.duration)}</p>
          <hr />
          <p>{flight.direct ? '✈️ Directo' : `🛑 ${flight.layovers.length} escalas`}</p>
        </div>
        
        <div className="arrival">
          <p className="time">{formatTime(flight.arrival.time)}</p>
          <p>{flight.arrival.code}</p>
          <p>{flight.arrival.city}</p>
        </div>
      </div>

      <div className="flight-footer">
        <button>Seleccionar</button>
        <p className="price">${flight.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default FlightCard;