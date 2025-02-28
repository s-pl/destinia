import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from '@chakra-ui/react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box as="main" flex="1" p={4}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;




