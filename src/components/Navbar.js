// import react from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.name}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>
              </ul>
                <div className={`form-check form-switch text-${props.mode=== 'light'?'dark': 'light'}`}>
                  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Theme</label>
                </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  name: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  aboutText: propTypes.string,
};

// Navbar.defaultProps = {
//   title: "React",
//   name: "Your name",
//   aboutText: "this is abouttext",
// };
