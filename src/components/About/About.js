import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="about__container">
      <section className="about__firstSection">
          <div className="about__leftMenu">
            
            <a href="https://www.linkedin.com/in/marwan-rizik-8204971ab/">

            <img src="/img/linkedin.svg" alt="linkedin" />
            </a>

            <a href="https://github.com/Marwanrizik91">

            <img src="/img/github.svg" alt="github" />
            </a>
            
          </div>

          <div>
          </div>

          <div className="about__personalInfo">
            <h1>Marwan Rizik</h1>
            <p>Full stack web developer</p>
          </div>
      </section>
      <section className="about__secondSection">
        <div className="about__secondContainer">
          <div className="about__detailsText">
              <h2>What technologies do I work with?</h2>
              <p>Just hire me!</p>
          </div>

          <div className="about_GridSection">

          {/* <div className="about__frontendTechstack technologies_icons">
              <h1>Front end</h1> */}
              <img className="about__Grid1" src="/img/react.svg" alt="" />
              <img className="about__Grid2" src="/img/redux.svg" alt="" />
              <img className="about__Grid3" src="/img/material-ui.svg" alt="" />
              <img className="about__Grid4" src="/img/html-5.svg" alt="" />
              <img className="about__Grid5" src="/img/css.svg" alt="" />
          {/* </div>

          <div className="about__backendTechStack technologies_icons">
          <h1>Back end</h1> */}
              <img className="about__Grid6" src="/img/node-js.svg" alt="" />
              <img className="about__Grid7" src="/img/express-js.svg" alt="" />
              <img className="about__Grid8" src="/img/firebase-icon.svg" alt="" />
              <img className="about__Grid9" src="/img/mongodb-icon.svg" alt="" />
              <img className="about__Grid10" src="/img/postgresql-icon.svg" alt="" />
          </div>

          </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default About;
