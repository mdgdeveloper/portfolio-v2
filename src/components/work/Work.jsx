import "./work.css";

const Work = () => {
  return (
    <div className="w-wrapper" id="work">
      <div className="w-box">
        <h2 className="w-title">Mi experiencia laboral</h2>
        <p className="w-main-info">Los últimos años los he pasado trabajando en algunas cosas. Aquí tienes una pequeña lista.</p>
        <div className="w-list">
          <div className="w-entry">
            <div className="w-date">
              <p className="w-date-value">De Abril 2018</p>
              <p className="w-date-value">Actualidad</p>
            </div>
            <div className="w-line">
              <div className="w-ball"></div>
            </div>
            <div className="w-card">
              <h3 className="w-card-title">
                Performance and Optimization Engineer
              </h3>
              <h4 className="w-card-company">United Nations - UNOPS</h4>
              <p className="w-card-text">
                Análisis de soluciones de monitorizacion basadas en el stack
                ELK. Implementación de configuraciones y desarrollo de
                soluciones orientadas a la mejora de rendimiento.
              </p>
            </div>
          </div>
          <div className="w-entry">
            <div className="w-date">
              <p className="w-date-value">De Diciembre 2013</p>
              <p className="w-date-value">a Marzo 2018</p>
            </div>
            <div className="w-line">
              <div className="w-ball"></div>
            </div>
            <div className="w-card">
              <h3 className="w-card-title">Application Performance Engineer</h3>
              <h4 className="w-card-company">United Nations - UNOPS</h4>
              <p className="w-card-text">
                Análisis de soluciones de monitorizacion basadas en el stack
                ELK. Implementación de configuraciones y desarrollo de
                soluciones orientadas a la mejora de rendimiento.
              </p>
            </div>
          </div>
          <div className="w-entry">
            <div className="w-date">
              <p className="w-date-value">De Septiembre 2011</p>
              <p className="w-date-value">a Noviembre 2013</p>
            </div>
            <div className="w-line">
              <div className="w-ball"></div>
            </div>
            <div className="w-card">
              <h3 className="w-card-title">Técnico de Network Control Center</h3>
              <h4 className="w-card-company">United Nations - CSD</h4>
              <p className="w-card-text">
                Análisis de soluciones de monitorizacion basadas en el stack
                ELK. Implementación de configuraciones y desarrollo de
                soluciones orientadas a la mejora de rendimiento.
              </p>
            </div>
          </div>
          <div className="w-entry">
            <div className="w-date">
              <p className="w-date-value">De Septiembre 2009</p>
              <p className="w-date-value">a Junio 2011</p>
            </div>
            <div className="w-line">
              <div className="w-ball"></div>
            </div>
            <div className="w-card">
              <h3 className="w-card-title">Ingeniero de redes</h3>
              <h4 className="w-card-company">Ralco Networks</h4>
              <p className="w-card-text">
                Análisis de soluciones de monitorizacion basadas en el stack
                ELK. Implementación de configuraciones y desarrollo de
                soluciones orientadas a la mejora de rendimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
