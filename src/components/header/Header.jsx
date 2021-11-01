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
              <div className="h-menu-item">Acerca</div>
              <div className="h-menu-item">Articulos</div>
              <div className="h-menu-item">Podcast</div>
              <div className="h-menu-item">Proyectos</div>
              <div className="h-menu-item">Contacto</div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
