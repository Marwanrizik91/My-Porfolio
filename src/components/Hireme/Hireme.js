import React from "react";
import "./Hireme.css";

function Hireme() {
  return (
    <div className="hireme">
      <div id="hireme" className="hireme__container">
        <h1 className="hireme__title">Hire me!</h1>
        <p className="hireme__text">
          If you happen to like my work, please don't hesitate to contact me or
          send me a message on Linkedin
        </p>
        <h3>
          Contact:
          <br></br>
          marwan.rizik@gmail.com
        </h3>
        <div className="hireme__buttons">
          <div className="hireme__button">
            <a href="https://www.linkedin.com/in/marwan-rizik-8204971ab/">
              My Linkedin
            </a>
          </div>

          <div className="hireme__button">
            <a href="https://github.com/Marwanrizik91">My Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hireme;
