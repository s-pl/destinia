import { useState, useEffect } from "react";
import { fetchFlightsData } from "../services/FlightService";

export const useFlights = (origen, destino, salida, regreso, pasajeros) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("price");

  useEffect(() => {
    const getFlights = async () => {
      if (!origen || !destino || !salida) {
        setError("Faltan datos en la búsqueda.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const processedFlights = await fetchFlightsData(origen, destino, salida, regreso, pasajeros);
        setFlights(processedFlights);
      } catch (err) {
        setError("Error al obtener vuelos. Por favor, inténtalo de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    getFlights();
  }, [origen, destino, salida, regreso, pasajeros]);

  const sortedFlights = [...flights].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "departure") return new Date(a.departure.time) - new Date(b.departure.time);
    return 0;
  });

  return {
    flights: sortedFlights,
    loading,
    error,
    sortBy,
    setSortBy,
    flightsCount: sortedFlights.length
  };
};