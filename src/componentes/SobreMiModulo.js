import React from "react";
import "./SobreMiModulo.css"; // le damos estilo aparte

function SobreMiModulo({ imagen, titulo, descripcion }) {
  return (
    <div className="sobre-mi-modulo">
      <img src={imagen} alt={titulo} className="sobre-mi-imagen" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default SobreMiModulo; // 👈 ESTE EXPORT ES CLAVE

