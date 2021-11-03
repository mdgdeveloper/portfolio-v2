import "./skills.css";

// Icons
import Javascript from "../../img/icons/javascript.png";
import Cisco from "../../img/icons/cisco.jpg";
import Html from "../../img/icons/html.png";
import Css from "../../img/icons/css.png";
import Elk from "../../img/icons/elk.png";


import Skill from "./Skill";

const Skills = () => {
  

  return (
    <div className="sk-wrapper">
      <div className="sk-box">
        <div className="sk-list">
          <Skill image={Javascript} title="Javascript" years="4" percentage="3" />
          <Skill image={Cisco} title="Cisco" years="10" percentage="8" />
          <Skill image={Html} title="HTML" years="8" percentage="7" />
          <Skill image={Css} title="CSS" years="8" percentage="7" />
          <Skill image={Elk} title="ELK" years="4" percentage="3" />

        </div>
      </div>
    </div>
  );
};

export default Skills;
