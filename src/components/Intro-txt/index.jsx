import React from "react";

const IntroTxt = ({subBG}) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/img/slid/freelancergood.png)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6>Hello, Je suis</h6>
              <h1>Junior Wembopa</h1>
              <h4>Développeur FullStack React &amp; Nodejs</h4>
              <div className="social-icon">
                <a href="https://www.instagram.com/junior_the_webdeveloper/" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a href="#0" className="icon">
                  <i className="fab fa-twitter"></i>
                </a> */}
                <a href="https://github.com/JuniorWMB" className="icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/junior-wembopa-42b2311a5/" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
