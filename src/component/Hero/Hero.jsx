import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import imageYeh from "./../../assets/img/hero/person.png"

function hero() {
  return (
    <>
      <section className="hero-section">
        <div className="row">
          <div className="col-lg-6 col-12 mx-5">
            <div className="description my-5">
              <h1 className="description-title">
                Software designer, founder, and amateur astronaut.
              </h1>
              <p className="description-sub-title">
                I’m Yehea Shorafa, a software Enginering in Gaza City. I’m the
                founder and CEO of Planetaria, where we develop technologies
                that empower regular people to explore space on their own terms.
              </p>
            </div>
            <div className="soical my-4">
              <ul>
                <li className="soical-link">
                  <a
                    target="_blank"
                    className="soiacl-item"
                    href="https://www.facebook.com/profile.php?id=61556157676426"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="soical-link">
                  <a
                    target="_blank"
                    className="soiacl-item"
                    href="https://www.instagram.com/yehea__sh/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="soical-link">
                  <a
                    target="_blank"
                    className="soiacl-item"
                    href="https://github.com/"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className="soical-link">
                  <a className="soiacl-item" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="image">
              <img src={imageYeh} className="img-fluid" style={{width : "70%"}}  alt="real" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default hero;
