import react from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav>
        <li>Home {props.name}</li>
        <li>About</li>
        <li>Contact</li>
        <li>Nothing</li>
      </nav>
      <div className="container">
        <small>{props.aboutText}</small>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          voluptas nemo itaque pariatur ducimus quos nulla quibusdam
          repellendus, aut nesciunt! Illum, quaerat porro optio doloremque et
          ad? Molestias, quasi natus.
        </h3>
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string,
};

Navbar.defaultProps = {
  title: "Your name",
  aboutText: "this is abouttext",
};
