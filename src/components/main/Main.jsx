import "./main.css";
import Profile from '../../img/profile.jpg';

const Main = () => {
  return (
    <div className="m-global">
      <div className="m-wrapper">
        <div className="m-title">
          <h2 className="m-name">Sergio Madrigal</h2>
          <div className="m-desc-box">
            <p className="m-desc">Ingeniero de Telecomuniaciones - Psicólogo - Estudiante de Matemáticas.</p>
            <p className="m-desc">Desarrollador front-end en mis ratos libres.</p>
          </div>
        </div>
        <div className="m-picture">
            <img src={Profile} alt="" className="m-profile" />
        </div>
      </div>
    </div>
  );
};

export default Main;
