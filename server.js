import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Ruta para obtener vuelos desde SerpAPI
app.get("/api/flights", async (req, res) => {
  try {
    const { origen, destino, salida, regreso } = req.query;

    if (!origen || !destino || !salida || !regreso) {
      return res.status(400).json({ error: "Faltan parámetros en la solicitud" });
    }

    const response = await axios.get("https://serpapi.com/search.json", {
      params: {
        engine: "google_flights",
        departure_id: origen,
        arrival_id: destino,
        outbound_date: salida,
        return_date: regreso,
        currency: "EUR",
        hl: "es",
        api_key: process.env.API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener vuelos", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy corriendo en http://localhost:${PORT}`);
});
