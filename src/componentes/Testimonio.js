import React from "react";
import "./Testimonio.css";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <div className="testimonio">
        <img
          className="imagen-testimonio"
          src="https://www.arpher.cl/wp-content/uploads/2017/09/back01.jpg"
          alt="Monitor con codigo de color fuchsia y una computadora antigua"
        />
        <p>Bienvenido a nuestra experiencia digital.</p>
        <p>Donde las ideas cobran vida.</p>
      </div>

      <div className="testimonio">
        <img
          className="imagen-testimonio"
          src="https://www.eslabon.digital/wp-content/uploads/2021/02/diseno-web.jpg"
          alt="dos monitores para programación y un portátil"
        />
        <p>Tu nuevo punto de partida</p>
        <p>Navegá sin límites.</p>
      </div>

      <div className="testimonio">
        <img
          className="imagen-testimonio"
          src="https://togrowagencia.com/wp-content/uploads/2024/08/desarrollador-de-software.webp"
          alt="Nuevas tecnologías con código de colores y un portátil"
        />
        <p>Explorá cada sección</p>
        <p>Comenzamos.</p>
      </div>
    </div>
  );
}

export default Testimonio;
