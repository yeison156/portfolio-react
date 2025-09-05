import React from "react";
import "./ContactoModulo.css";

function ContactoModulo({ titulo, enlace, icono }) {
  return (
    <div className="contacto-modulo">
      <a href={enlace} target="_blank" rel="noopener noreferrer">
        <div className="contacto-icono">{icono}</div>
        <h3>{titulo}</h3>
      </a>
    </div>
  );
}

export default ContactoModulo;
