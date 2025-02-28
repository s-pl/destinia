import React from "react";
import { HStack, Box, Input, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useSearchForm } from "../../hooks/useSearchForm";

const SearchForm = () => {
  const { formData, handleChange, handleSubmit } = useSearchForm();

  return (
    <motion.div
      className="search-form"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <HStack spacing={4} wrap="wrap">
        <Box className="form-element">
          <label htmlFor="origen">Origen</label>
          <Input 
            id="origen" 
            type="text" 
            placeholder="Ciudad de origen" 
            value={formData.origen} 
            onChange={handleChange} 
          />
        </Box>
        <Box className="form-element">
          <label htmlFor="destino">Destino</label>
          <Input 
            id="destino" 
            type="text" 
            placeholder="Ciudad de destino" 
            value={formData.destino} 
            onChange={handleChange} 
          />
        </Box>
        <Box className="form-element">
          <label htmlFor="salida">Salida</label>
          <Input 
            id="salida" 
            type="date" 
            value={formData.salida} 
            onChange={handleChange} 
          />
        </Box>
        <Box className="form-element">
          <label htmlFor="regreso">Regreso</label>
          <Input 
            id="regreso" 
            type="date" 
            value={formData.regreso} 
            onChange={handleChange} 
          />
        </Box>
        <Box className="form-element">
          <label htmlFor="pasajeros">Pasajeros</label>
          <Input 
            id="pasajeros" 
            type="number" 
            value={formData.pasajeros} 
            onChange={handleChange} 
          />
        </Box>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="search-button" onClick={handleSubmit}>
            Buscar vuelos
          </Button>
        </motion.div>
      </HStack>
    </motion.div>
  );
};

export default SearchForm;