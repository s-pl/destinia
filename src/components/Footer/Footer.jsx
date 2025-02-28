import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import { useModal } from '../Modal/ModalContext';

const Footer = () => {
  const { openModal } = useModal();
  
  
  const openPrivacyModal = () => {
    openModal(
      <div className="modal-content">
        <p>En Destinia, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política describe cómo recopilamos, usamos y protegemos su información personal.</p>
        
        <h3 className="modal-subtitle">Información que recopilamos</h3>
        <p>Recopilamos información personal como su nombre, dirección de correo electrónico y preferencias cuando usted se registra en nuestro sitio o utiliza nuestros servicios.</p>
        
        <h3 className="modal-subtitle">Cómo utilizamos su información</h3>
        <p>Utilizamos su información para proporcionar y mejorar nuestros servicios, personalizar su experiencia y comunicarnos con usted.</p>
        
        <h3 className="modal-subtitle">Protección de datos</h3>
        <p>Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado o divulgación.</p>
      </div>,
      "Política de privacidad"
    );
  };
  
  const openTermsModal = () => {
    openModal(
      <div className="modal-content">
        <p>Al utilizar Destinia, usted acepta cumplir con estos términos de servicio. Por favor, léalos cuidadosamente.</p>
        
        <h3 className="modal-subtitle">Uso del servicio</h3>
        <p>Nuestros servicios están diseñados para ayudarle a planificar y reservar viajes. Usted acepta utilizar nuestros servicios solo para fines legales y de acuerdo con estos términos.</p>
        
        <h3 className="modal-subtitle">Cuentas de usuario</h3>
        <p>Usted es responsable de mantener la confidencialidad de su cuenta y contraseña. Notifíquenos inmediatamente sobre cualquier uso no autorizado de su cuenta.</p>
        
        <h3 className="modal-subtitle">Limitación de responsabilidad</h3>
        <p>Destinia no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de utilizar nuestros servicios.</p>
      </div>,
      "Términos de servicio"
    );
  };
  
  const openContactModal = () => {
    openModal(
      <div className="modal-content">
        <p>Estamos aquí para ayudarle. No dude en ponerse en contacto con nosotros para cualquier consulta o asistencia.</p>
        
        <h3 className="modal-subtitle">Información de contacto</h3>
        <p>Email: info@destinia.com</p>
        <p>Teléfono: +34 900 123 456</p>
        <p>Dirección: Calle Principal 123, 28001 Madrid, España</p>
        
        <h3 className="modal-subtitle">Horario de atención</h3>
        <p>Lunes a Viernes: 9:00 - 20:00</p>
        <p>Sábados: 10:00 - 15:00</p>
        <p>Domingos: Cerrado</p>
      </div>,
      "Contacto"
    );
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="social-icons">
            <a href="https://facebook.com/destinia" aria-label="Facebook" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://twitter.com/destinia" aria-label="Twitter" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://instagram.com/destinia" aria-label="Instagram" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://linkedin.com/destinia" aria-label="LinkedIn" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="mailto:info@destinia.com" aria-label="Email" className="social-link">
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
       
        <div className="footer-middle">
          <div className="footer-links">
            <a className="footer-link" onClick={openPrivacyModal}>Política de privacidad</a>
            <a className="footer-link" onClick={openTermsModal}>Términos de servicio</a>
            <a className="footer-link" onClick={openContactModal}>Contacto</a>
          </div>
        </div>
       
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Destinia. Creado por Samuel Ponce Luna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;