import "./contact.css";

const Contact = () => {
  return (
    <div className="c-wrapper" id="contact">
      <div className="c-box">
        <h2 className="c-title">Contacto</h2>
        <p className="c-desc">Si tienes alguna idea o quieres compartir algo conmigo.</p>
        <div className="c-form">
          <div className="c-form-textarea">
            <textarea className="c-form-ta" name="" id="" rows="5"></textarea>
          </div>
          <div className="c-form-info">
            <input className="c-input" type="text" placeholder="correo electronico"/>
            <button className="c-button">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
