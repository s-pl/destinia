import React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './Pages/Home/Home';
import Flights from "./Pages/Flights/Flights";
import Ia from "./Pages/Ia/Ia";
import { ModalProvider } from './components/Modal/ModalContext';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <ModalProvider>  
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/flights" element={<Layout />}>
              <Route index element={<Flights />} />
            </Route>
            <Route path="/ia" element={<Layout />}>
              <Route index element={<Ia />} />
            </Route>
          </Routes>
        </Router>
      </ModalProvider>
    </ChakraProvider>
  );
}

export default App;
