import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SearchForm from "../SearchForm/SearchForm";
import { useAnimatedTitle } from "../../hooks/useAnimatedTitle";

const HeroSection = () => {
  const title = useAnimatedTitle();

  return (
    <Box className="home-container">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Heading as="h1" className="main-heading">Encuentra vuelos con Destinia</Heading>
        <Text className="subheading">
          {title}
        </Text>
        <SearchForm />
      </motion.div>
    </Box>
  );
};

export default HeroSection;