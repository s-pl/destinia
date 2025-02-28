import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearchForm = () => {
  const [formData, setFormData] = useState({
    origen: "",
    destino: "",
    salida: "",
    regreso: "",
    pasajeros: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const queryString = new URLSearchParams(formData).toString();
    navigate(`/flights?${queryString}`);
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
};