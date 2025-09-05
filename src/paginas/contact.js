import React, { useState } from "react";
import ContactoModulo from "../componentes/ContactoModulo.js";
// 👇 Usa íconos de react-icons en lugar de imágenes PNG
import { FaFacebook, FaTwitter, FaInstagram, FaPaperPlane } from "react-icons/fa";

function Contact() {
  // 📝 Estados del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // ⚠️ Estados para errores de validación
  const [errores, setErrores] = useState({});

  // 🔄 Estados para el envío
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  // 🔍 Función para validar cada campo
  const validarCampo = (campo, valor) => {
    switch (campo) {
      case 'nombre':
        return valor.length < 2 ? 'El nombre debe tener al menos 2 caracteres' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(valor) ? 'Ingresa un email válido' : '';
      case 'mensaje':
        return valor.length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : '';
      default:
        return '';
    }
  };

  // ✏️ Manejar cambios en los inputs
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    
    // Actualizar el valor
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validar en tiempo real
    const error = validarCampo(name, value);
    setErrores(prev => ({
      ...prev,
      [name]: error
    }));

    // Limpiar estados de envío si el usuario está editando
    if (enviado || error) {
      setEnviado(false);
      setError(false);
    }
  };

  // 📧 Simular envío del formulario
  const manejarEnvio = async (e) => {
    e.preventDefault();

    // Validar todos los campos
    const nuevosErrores = {};
    Object.keys(formData).forEach(campo => {
      const error = validarCampo(campo, formData[campo]);
      if (error) nuevosErrores[campo] = error;
    });

    // Si hay errores, no enviar
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    // Simular envío
    setEnviando(true);
    setError(false);

    try {
      // Simular delay de envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular éxito (90% de probabilidad)
      if (Math.random() > 0.1) {
        setEnviado(true);
        // Resetear formulario
        setFormData({ nombre: '', email: '', mensaje: '' });
        setErrores({});
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setEnviando(false);
    }
  };

  // ✅ Verificar si el formulario es válido
  const formularioValido = Object.keys(formData).every(
    campo => formData[campo].trim() && !errores[campo]
  );

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      
      {/* 📝 FORMULARIO DE CONTACTO */}
      <div className="formulario-seccion">
        <h2>Envíame un mensaje</h2>
        <form onSubmit={manejarEnvio} className="formulario-contacto">
          
          {/* Campo Nombre */}
          <div className="campo-grupo">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={manejarCambio}
              className={errores.nombre ? 'input-error' : ''}
              placeholder="Tu nombre completo"
              disabled={enviando}
            />
            {errores.nombre && <span className="error-text">{errores.nombre}</span>}
          </div>

          {/* Campo Email */}
          <div className="campo-grupo">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={manejarCambio}
              className={errores.email ? 'input-error' : ''}
              placeholder="tu@email.com"
              disabled={enviando}
            />
            {errores.email && <span className="error-text">{errores.email}</span>}
          </div>

          {/* Campo Mensaje */}
          <div className="campo-grupo">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={manejarCambio}
              className={errores.mensaje ? 'input-error' : ''}
              placeholder="Escribe tu mensaje aquí..."
              rows="5"
              disabled={enviando}
            />
            {errores.mensaje && <span className="error-text">{errores.mensaje}</span>}
          </div>

          {/* Botón de envío */}
          <button 
            type="submit" 
            className={`boton-enviar ${!formularioValido || enviando ? 'deshabilitado' : ''}`}
            disabled={!formularioValido || enviando}
          >
            {enviando ? (
              <>⏳ Enviando...</>
            ) : (
              <>
                <FaPaperPlane /> Enviar mensaje
              </>
            )}
          </button>

          {/* Mensajes de estado */}
          {enviado && (
            <div className="mensaje-exito">
              ✅ ¡Mensaje enviado correctamente! Te contactaré pronto.
            </div>
          )}
          
          {error && (
            <div className="mensaje-error">
              ❌ Hubo un problema al enviar el mensaje. Intenta de nuevo.
            </div>
          )}
        </form>
      </div>

      {/* 📱 REDES SOCIALES */}
      <div className="redes-sociales-seccion">
        <h2>También puedes encontrarme en:</h2>
        <div className="contacto-grid">
          <ContactoModulo
            titulo="Facebook"
            enlace="https://www.facebook.com/tuusuario"
            icono={<FaFacebook size={50} color="#1877f2" />}
          />
          <ContactoModulo
            titulo="Twitter"
            enlace="https://twitter.com/tuusuario"
            icono={<FaTwitter size={50} color="#1da1f2" />}
          />
          <ContactoModulo
            titulo="Instagram"
            enlace="https://www.instagram.com/tuusuario"
            icono={<FaInstagram size={50} color="#e4405f" />}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;