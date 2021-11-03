
const Skill = ({ image, title, years, percentage}) => {


    const getSkillPercentage = (value) => {
        const Element = [];
        let aux = value;
        for (let i = 0; i < 10; i++) {
          if (value > 0) Element.push(<div className="sk-percentage-color"></div>);
          else Element.push(<div className="sk-percentage-white"></div>);
    
          value--;
        }
        return Element;
      };

    return (
        <div className="sk-section">
        <div className="sk-item">
          <div className="sk-desc">
            <div className="sk-item-img">
                <img src={image} alt="" className="sk-img" />
            </div>
            <div className="sk-desc-info">
              <h3 className="sk-item-title">{title}</h3>
              <h4 className="sk-item-years">{`${years} años`}</h4>
            </div>
          </div>
          <div className="sk-percentage">{getSkillPercentage(percentage)}</div>
        </div>
      </div>
    )
}

export default Skill
