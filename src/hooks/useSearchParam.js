import { useLocation } from "react-router-dom";

export const useSearchParams = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  
  return {
    origen: params.get("origen"),
    destino: params.get("destino"),
    salida: params.get("salida"),
    regreso: params.get("regreso"),
    pasajeros: params.get("pasajeros") || "1"
  };
};