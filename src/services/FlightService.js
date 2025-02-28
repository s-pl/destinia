import axios from "axios";

const BASE_URL = "https://lnd-server-api.onrender.com/api";

export const fetchFlightsData = async (origen, destino, salida, regreso, pasajeros) => {
  const response = await axios.get(`${BASE_URL}/flights`, {
    params: { origen, destino, salida, regreso, pasajeros }
  });

  const allFlights = [
    ...(response.data.best_flights || []), 
    ...(response.data.other_flights || [])
  ];

  return allFlights.flatMap(group => {
    return group.flights.map(flight => ({
      id: flight.flight_number,
      airline: flight.airline,
      logo: flight.airline_logo,
      class: flight.travel_class,
      departure: {
        time: flight.departure_airport.time,
        code: flight.departure_airport.id,
        city: origen
      },
      arrival: {
        time: flight.arrival_airport.time,
        code: flight.arrival_airport.id,
        city: destino
      },
      duration: flight.duration,
      price: group.price,
      direct: !(group.layovers && group.layovers.length > 0),
      layovers: group.layovers || []
    }));
  });
};
