import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";

const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>à propos de moi</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="main-title wow" data-splitting>
                Ma Mission est de vous donnez le meilleur site web des alentours.
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Hello! Je suis Junior Wembopa. Développeur Web basé en FRANCE et au UK. {`J'ai `}une riche experience dans le développement web, dans le digital en globalité et je suis bon aussi sur wordpress. {`J'adorerais`} parler avec vous de votre projet.
              </p>
              <a href="img/intro/CV-Junior Wembopa2022.pdf" className="simple-btn mt-40" download>
                Telecharger C.V
              </a>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6 className="custom-font">Javascript</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Nextjs</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="89%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Nodejs</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="88%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithSkills;
