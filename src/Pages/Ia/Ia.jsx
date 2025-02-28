import React, { useState } from "react";
import OpenAI from "openai";
import "./Ia.css"
const openai = new OpenAI({ apiKey: import.meta.env.VITE_SOME_KEY, dangerouslyAllowBrowser: true });

const Ia = () => {
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);


  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newConversation = [...conversation, { role: "user", content: input }];
    setConversation(newConversation);
    setInput("");

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "Tu tarea es determinar el destino de viaje ideal para el usuario según sus respuestas. El destino debe ser el más adecuado a sus preferencias y necesidades, priorizando opciones cercanas a su ubicación. Trabajas para la web de viajes Destinia, por lo que debes ofrecer una recomendación precisa y atractiva. como máximo puedes dar una respuesta de 140 caracteres." },
          ...newConversation
        ],
      });

      const reply = response.choices[0].message.content;
      setConversation([...newConversation, { role: "assistant", content: reply }]);

  
    } catch (error) {
      console.error("Error al obtener la respuesta de la IA:", error);
      alert("Hubo un error al procesar tu solicitud.");
    }

    setLoading(false);
  };

  return (
    <div className="ia-container">
  <h2 className="ia-title">Encuentra tu destino perfecto con IA</h2>
  <div className="ia-chatbox">
    {conversation.map((msg, index) => (
      <p key={index} className={msg.role === "user" ? "ia-user-message" : "ia-assistant-message"}>
        {msg.content}
      </p>
    ))}
  </div>
  <form className="ia-form" onSubmit={handleSubmit}>
    <input className="ia-input" type="text" value={input} onChange={handleInputChange} placeholder="Responde a la IA..." required />
    <button className="ia-button" type="submit" disabled={loading}>{loading ? "Procesando..." : "Enviar"}</button>
  </form>
</div>

  );
};

export default Ia;
