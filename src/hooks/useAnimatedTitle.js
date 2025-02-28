import { useState, useEffect } from "react";

export const useAnimatedTitle = () => {
  const [title, setTitle] = useState("Tus vacaciones soñadas te esperan");

  useEffect(() => {
    const titles = [
      "Tus vacaciones soñadas te esperan",
      "Vuela al paraíso por el mejor precio",
      "Descubre destinos exóticos hoy mismo",
      "Haz realidad tu viaje soñado",
      "Encuentra el vuelo perfecto para ti",
      "Haz que tu aventura comience aquí",
      "Vuela sin preocupaciones, solo por ti",
      "¡Tu destino ideal te está esperando!",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setTitle(titles[index]);
      index = (index + 1) % titles.length;
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return title;
};