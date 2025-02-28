import React from "react";
import { useSearchParams } from "../../hooks/useSearchParam";
import { useFlights } from "../../hooks/useFlights";
import SearchInfo from "../../components/SearchInfo/SearchInfo";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import FlightFilters from "../../components/FlightFilters/FlightFilters";
import FlightsList from "../../components/FlightList/FlightList";
import "./Flights.css";

const Flights = () => {
  const { origen, destino, salida, regreso, pasajeros } = useSearchParams();
  const { flights, loading, error, sortBy, setSortBy, flightsCount } = useFlights(
    origen, destino, salida, regreso, pasajeros
  );

  return (
    <div className="flights-container">
      <SearchInfo 
        origen={origen} 
        destino={destino} 
        salida={salida} 
        regreso={regreso} 
        pasajeros={pasajeros} 
      />

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <>
          <FlightFilters sortBy={sortBy} onSortChange={setSortBy} />
          <p>{flightsCount} vuelos encontrados</p>
          <FlightsList flights={flights} />
        </>
      )}
    </div>
  );
};

export default Flights;