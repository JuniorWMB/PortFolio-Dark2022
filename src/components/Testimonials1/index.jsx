/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${
          this.props.withBG ? "bg-img" : ""
        } ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${
          this.props.parallaxie ? " parallaxie" : ""
        } ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${
            this.props.withBG && !this.props.imgSrc
              ? "url(/img/slid/04.jpg)"
              : this.props.imgSrc
              ? `url(${this.props.imgSrc})`
              : "none"
          }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Que dise les clients ?
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Temoignage.
              </h3>
            </Split>
            <span className="tbg">Temoignage</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                <div className="item">
                  <p>
                  Junior est professionnel, disponible et flexible. Il {`s'adapte`} à vos échéances et votre emploi du temps. Il vous donne les meilleurs conseils pour rendre votre site le plus performant avec la meilleur expérience utilisateur. Junior est aussi force de proposition aussi bien sur le front que sur le back. Je recommande vivement Junior pour la création de votre site!
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/portfolio/mas/eve.jpeg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Eve Carbonneaux
                              </h6>
                              <span className="author-details">
                                CEO, Digital Eve Consulting
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/1.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Alex Regelman
                            </h6>
                            <span className="author-details">
                              Co-founder, Colabrio
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                  Ce fut un plaisir de collaborer avec Junior sur ce projet. Il est très professionnel, à l’écoute et à su s’adapter à nos contraintes. Il a livré un travail de qualité, dans les temps et en respectant notre budget. Son expertise et sa bonne humeur ont été un vrai plus. Junior est un vrai atout et je le recommanderai sans hésiter. 
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/igTransport.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Jessica Alom
                              </h6>
                              <span className="author-details">
                                Chef de projet, Iguane Transport
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                            <img src="/img/clients/igTransport.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                                Jessica Alom
                              </h6>
                              <span className="author-details">
                                Chef de projet, Iguane Transport
                              </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <p>
                  Junior a été professionnel, précis dans ses conseils, pédagogue et il a su {`s'adapter`} à un contexte particulier. Je le recommande vivement.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBGLftstlParallaxie ? (
                          <>
                            <div className="lxleft">
                              <div className="img">
                                <img src="/img/clients/vlgood.jpg" alt="" />
                              </div>
                            </div>
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                              Fatou Dioumassy
                              </h6>
                              <span className="author-details">
                                Co-fondatrice, Vlonesiebrand
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="img">
                              <img src="/img/clients/vlgood.jpg" alt="" />
                            </div>
                            <h6 className="author-name custom-font">
                              Fatou Dioumassy
                            </h6>
                            <span className="author-details">
                              Co-fondatrice, Vlonesiebrand
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
