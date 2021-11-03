import "./header.css";
import Logo from '../../img/logo.png';

const Header = () => {
  return (
      <div className="h-global">
    <div className="h-wrapper">
      <div className="h-left">
          <div className="h-logo">
              <img src={Logo} alt="" className="h-logo-img" />
          </div>
      </div>
      <div className="h-center"></div>
      <div className="h-right">
          <div className="h-menu">
              <div className="h-menu-item"><a href="#home">Acerca</a></div>
              <div className="h-menu-item"><a href="#study">Estudios</a></div>
              <div className="h-menu-item"><a href="#work">Experiencia</a></div>
              <div className="h-menu-item"><a href="#projects">Proyectos</a></div>
              <div className="h-menu-item"><a href="#contact">Contacto</a></div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
