import "./study.css";

// Images for Logos
import Upv from "../../img/UPV_logo.png";
import Uned from "../../img/uned_logo.png";

const Study = () => {
  return (
    <div className="st-wrapper">
      <div className="st-box">
        <h2 className="st-title">Mis estudios</h2>
        <div className="st-list">
          <div className="st-item-large">
            <div className="st-item-img">
              <img src={Upv} alt="" className="st-item-img-style" />
            </div>
            <div className="st-item-desc">
              <h3 className="st-item-title">
                Ingeniero superior en Telecomunicaciones
              </h3>
              <h4 className="st-item-center">
                Universitat Politècnica de València - UPV
              </h4>
              <p className="st-item-years">2002-2008</p>
            </div>
          </div>

          <div className="st-item-large">
            <div className="st-item-img">
              <img src={Uned} alt="" className="st-item-img-style" />
            </div>
            <div className="st-item-desc">
              <h3 className="st-item-title">Graduado en Psicología</h3>
              <h4 className="st-item-center">
                Universidad Nacional de Educación a Distancia
              </h4>
              <p className="st-item-years">2014-2018</p>
            </div>
          </div>
        </div>
        <div className="st-list">
          <div className="st-item-large-ongoing">
            <div className="st-item-img">
              <img src={Uned} alt="" className="st-item-img-style" />
            </div>
            <div className="st-item-desc">
              <h3 className="st-item-title">Grado en Matemáticas</h3>
              <h4 className="st-item-center">
                Universidad Nacional de Educación a Distancia
              </h4>
              <p className="st-item-years">2019-actualidad</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Study;
