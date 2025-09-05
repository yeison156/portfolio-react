import React from "react";
import SobreMiModulo from "../componentes/SobreMiModulo.js";

function About() {
  return (
    <div>
      <h1>Sobre mí</h1>
      <p>Hola, soy Yeison y esta es una pequeña presentación sobre mí.</p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <SobreMiModulo
          imagen="https://media.istockphoto.com/id/1224500457/es/foto/formaci%C3%B3n-en-tecnolog%C3%ADa-abstracta-de-c%C3%B3digo-de-programaci%C3%B3n-del-desarrollador-de-software-y.jpg?s=612x612&w=0&k=20&c=gXN8oxhJPcMuwLYKcpgnIqfBhIBAz2xRuv72DVSMX70="
          titulo="Mi pasión por la programación"
          descripcion="Me encanta aprender nuevas tecnologías y construir proyectos con React."
        />
        <SobreMiModulo
          imagen="https://st4.depositphotos.com/10325396/24130/i/450/depositphotos_241303646-stock-photo-programming-code-abstract-technology-background.jpg"
          titulo="Mis intereses"
          descripcion="Disfruto investigar, leer y mejorar mis habilidades como desarrollador."
        />
        <SobreMiModulo
          imagen="https://cdn.prod.website-files.com/65159e844f8f08a72cefa2b0/65159e844f8f08a72cefa570_65122f02e60199833957e1da_istockphoto-871030872-612x612.jpeg"
          titulo="Mi objetivo"
          descripcion="Quiero crecer profesionalmente y aportar valor en cada proyecto que realice."
        />
      </div>
    </div>
  );
}

export default About;
