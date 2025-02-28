import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import { getDestinationsData } from "../../services/destinationService";
import { createCustomIcon } from "../../utils/mapUtils";

const MapDisplay = () => {
  const flightsData = getDestinationsData();
  const customIcon = createCustomIcon();

  return (
    <Box className="map-container">
      <Heading as="h2" className="map-heading">
        Explora los mejores precios por el mundo
      </Heading>
      <Text className="map-subheading">
        Descubre tarifas promedio en diferentes países.
      </Text>

      <motion.div
        className="map-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <MapContainer center={[20, 0]} zoom={2} className="map">
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" />
          {flightsData.map((flight, index) => (
            <Marker key={index} position={[flight.lat, flight.lng]} icon={customIcon}>
              <Popup>
                <strong>{flight.city}, {flight.country}</strong>
                <br />
                Precio medio: ${flight.price}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </Box>
  );
};

export default MapDisplay;