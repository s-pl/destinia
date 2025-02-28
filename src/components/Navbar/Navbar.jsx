import React from "react";
import { Box, Flex, HStack, Link, Image } from "@chakra-ui/react";
import logo from "../../assets/react.svg"; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box as="nav" className="navbar">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={3}>
          <a href="/">
          <Image src={logo} alt="Logo" className="logo-img" />
          </a>
          <Box className="logo-text">Destinia</Box>
        </HStack>
        <HStack as="ul" spacing={8} className="nav-links">
          <li>
            <Link href="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/ia" className="nav-link">
              IA
            </Link>
          </li>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
