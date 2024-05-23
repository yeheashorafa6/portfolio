import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function header() {
  return (
    <>
      <header className="mt-3 d-flex align-items-center justify-content-space-between px-3">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item my-2 mx-3">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item  my-2 mx-3">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item my-2 mx-3">
                  <a className="nav-link" href="#">
                    Articles
                  </a>
                </li>
                <li className="nav-item my-2 mx-3">
                  <a className="nav-link">Projects</a>
                </li>
                <li className="nav-item my-2 mx-3">
                  <a className="nav-link">Speaking</a>
                </li>
                <li className="nav-item my-2 mx-3 mx-lg-0">
                  <a className="nav-link">Uses</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mode">
          <button>
            <FontAwesomeIcon icon={faMoon} />
          </button>
        </div>
      </header>
    </>
  );
}

export default header;
