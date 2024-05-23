import "./mainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function mainContent() {
  return (
    <>
      <section className="mainContent-section mx-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="tab-content">
              <div className="nav-wrapper">
                <ul className="nav nav-tabs d-inline-block" role="tablist">
                  <li className="nav-item my-3" role="presentation">
                    <button
                      className="nav-link active"
                      id="allProject-tab"
                      type="button"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#allProject"
                      aria-controls="allProject"
                      aria-selected="false"
                      tabIndex="-1"
                    >
                      All Project
                    </button>
                  </li>

                  <li className="nav-item my-3" role="presentation">
                    <button
                      className="nav-link"
                      id="html&css-tab"
                      type="button"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#html&css"
                      aria-controls="html&css"
                      aria-selected="true"
                    >
                      HTML & CSS
                    </button>
                  </li>

                  <li className="nav-item my-3" role="presentation">
                    <button
                      className="nav-link"
                      id="javascript-tab"
                      type="button"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#javascript"
                      aria-controls="javascript"
                      aria-selected="false"
                      tabIndex="-1"
                    >
                      Java Script
                    </button>
                  </li>
                  <li className="nav-item my-3" role="presentation">
                    <button
                      className="nav-link"
                      id="react&mui-tab"
                      type="button"
                      role="tab"
                      data-bs-toggle="tab"
                      data-bs-target="#react&mui"
                      aria-controls="react&mui"
                      aria-selected="false"
                      tabIndex="-1"
                    >
                      React & MUI
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="allProject"
                    role="tabpanel"
                    aria-labelledby="allProject-tab"
                  >
                    <div className="tab-pane-image">
                      <img src="./../../../public/img/1.jpg" alt="" />
                    </div>
                    <div className="tab-pane-info my-4 mx-4">
                      <h3 className="info-title">Html</h3>
                      <p className="info-sub-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum nemo dicta vel earum laboriosam dolorum
                      </p>
                    </div>
                    <div className="socail-link my-4 py-4 px-4">
                      <span className="social-item">
                        <FontAwesomeIcon icon={faLink} />
                      </span>
                      <span className="social-item">
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                      <h5 className="more ">
                        more
                        <span className="ms-2 mt-2">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="arrow"
                          />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade"
                    id="allProject"
                    role="tabpanel"
                    aria-labelledby="allProject-tab"
                  >
                    <div className="tab-pane-image">
                      <img src="./../../../public/img/2.jpg" alt="" />
                    </div>
                    <div className="tab-pane-info my-4 mx-4">
                      <h3 className="info-title">CSS</h3>
                      <p className="info-sub-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum nemo dicta vel earum laboriosam dolorum
                      </p>
                    </div>
                    <div className="socail-link my-4 py-4 px-4">
                      <span className="social-item">
                        <FontAwesomeIcon icon={faLink} />
                      </span>
                      <span className="social-item">
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                      <h5 className="more ">
                        more
                        <span className="ms-2 mt-2">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="arrow"
                          />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade"
                    id="html&css"
                    role="tabpanel"
                    aria-labelledby="html&css-tab"
                  >
                    <div className="tab-pane-image">
                      <img src="./../../../public/img/3.jpg" alt="" />
                    </div>
                    <div className="tab-pane-info my-4 mx-4">
                      <h3 className="info-title">Html</h3>
                      <p className="info-sub-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum nemo dicta vel earum laboriosam dolorum
                      </p>
                    </div>
                    <div className="socail-link my-4 py-4 px-4">
                      <span className="social-item">
                        <FontAwesomeIcon icon={faLink} />
                      </span>
                      <span className="social-item">
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                      <h5 className="more ">
                        more
                        <span className="ms-2 mt-2">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="arrow"
                          />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade"
                    id="html&css"
                    role="tabpanel"
                    aria-labelledby="html&css-tab"
                  >
                    <div className="tab-pane-image">
                      <img src="./../../../public/img/4.jpg" alt="" />
                    </div>
                    <div className="tab-pane-info my-4 mx-4">
                      <h3 className="info-title">Front End</h3>
                      <p className="info-sub-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum nemo dicta vel earum laboriosam dolorum
                      </p>
                    </div>
                    <div className="socail-link my-4 py-4 px-4">
                      <span className="social-item">
                        <FontAwesomeIcon icon={faLink} />
                      </span>
                      <span className="social-item">
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                      <h5 className="more ">
                        more
                        <span className="ms-2 mt-2">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="arrow"
                          />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="javascript"
                    role="tabpanel"
                    aria-labelledby="javascript-tab"
                  >
                    <div className="tab-pane-image">
                      <img src="./../../../public/img/5.jpg" alt="" />
                    </div>
                    <div className="tab-pane-info my-4 mx-4">
                      <h3 className="info-title">Jave Script</h3>
                      <p className="info-sub-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum nemo dicta vel earum laboriosam dolorum
                      </p>
                    </div>
                    <div className="socail-link my-4 py-4 px-4">
                      <span className="social-item">
                        <FontAwesomeIcon icon={faLink} />
                      </span>
                      <span className="social-item">
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                      <h5 className="more ">
                        more
                        <span className="ms-2 mt-2">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="arrow"
                          />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="javascript"
                    role="tabpanel"
                    aria-labelledby="javascript-tab"
                  >
                    <div className="tab-pane-image">
                      <img src="./../../../public/img/6.jpg" alt="" />
                    </div>
                    <div className="tab-pane-info my-4 mx-4">
                      <h3 className="info-title">java Script</h3>
                      <p className="info-sub-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum nemo dicta vel earum laboriosam dolorum
                      </p>
                    </div>
                    <div className="socail-link my-4 py-4 px-4">
                      <span className="social-item">
                        <FontAwesomeIcon icon={faLink} />
                      </span>
                      <span className="social-item">
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                      <h5 className="more ">
                        more
                        <span className="ms-2 mt-2">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="arrow"
                          />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="react&mui"
                    role="tabpanel"
                    aria-labelledby="react&mui-tab"
                  >
                    <div className="tab-pane-image">
                      <img src="./../../../public/img/7.jpg" alt="" />
                    </div>
                    <div className="tab-pane-info my-4 mx-4">
                      <h3 className="info-title">React & MUI</h3>
                      <p className="info-sub-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum nemo dicta vel earum laboriosam dolorum
                      </p>
                    </div>
                    <div className="socail-link my-4 py-4 px-4">
                      <span className="social-item">
                        <FontAwesomeIcon icon={faLink} />
                      </span>
                      <span className="social-item">
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                      <h5 className="more ">
                        more
                        <span className="ms-2 mt-2">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="arrow"
                          />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="tab-content">
                  <div
                    className="tab-pane fade"
                    id="react&mui"
                    role="tabpanel"
                    aria-labelledby="react&mui-tab"
                  >
                    <div className="tab-pane-image">
                      <img src="./../../../public/img/8.jpg" alt="" />
                    </div>
                    <div className="tab-pane-info my-4 mx-4">
                      <h3 className="info-title">React & MUI</h3>
                      <p className="info-sub-title">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Laborum nemo dicta vel earum laboriosam dolorum
                      </p>
                    </div>
                    <div className="socail-link my-4 py-4 px-4">
                      <span className="social-item">
                        <FontAwesomeIcon icon={faLink} />
                      </span>
                      <span className="social-item">
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                      <h5 className="more ">
                        more
                        <span className="ms-2 mt-2">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="arrow"
                          />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default mainContent;
