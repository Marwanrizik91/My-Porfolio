import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="about__container">
      <section className="about__firstSection">
        <div className="about__firstSectionContainer">
          <div className="about__leftMenu">
            
            <a href="https://www.linkedin.com/in/marwan-rizik-8204971ab/">

            <img src="/img/linkedin.svg" alt="linkedin" />
            </a>

            <a href="https://github.com/Marwanrizik91">

            <img src="/img/github.svg" alt="github" />
            </a>
            
          </div>

          <div>
            {/* <img className="about__myPhoto" src="/img/myPhoto.jpeg" alt="me" /> */}
          </div>

          <div className="about__personalInfo">
            <h1>Marwan Rizik</h1>
            <p>Full stack web developer</p>
          </div>
        </div>
      </section>
      <section className="about__secondSection">
        {/* <div className="about__imageContainer">
          <img src="/img/about.jpg" alt="about me" />
          <h1>What I do</h1>
          <div className="about__whatIdo">
            <div className="about__section">
              <h3>Front end</h3>
              <p>
                I develop front end applications with ReactJS. Experienced with
                most used libraries such as MaterialUI, Redux, and much more!
              </p>
            </div>
            <div className="about__section">
              <h3>Back end</h3>
              <p>
                I develop web servers, REST API’s with node.js. Experienced with
                variety of DB’s such as PSQL, Firebase and mongo.
              </p>
            </div>
          </div>
        </div> */}

        <div className="about__secondContainer">
          <div className="about__detailsText">
              <h2>What technology do i work with?</h2>
              <p>Just hire me!</p>
          </div>

          <div className="about__frontendTechstack technologies_icons">
              <h1>Front end</h1>
              <img src="/img/react.svg" alt="" />
              <img src="/img/redux.svg" alt="" />
              <img src="/img/material-ui.svg" alt="" />
              <img src="/img/html-5.svg" alt="" />
              <img src="/img/css.svg" alt="" />
          </div>

          <div className="about__backendTechStack technologies_icons">
          <h1>Back end</h1>
              <img src="/img/node-js.svg" alt="" />
              <img src="/img/express-js.svg" alt="" />
              <img src="/img/firebase-icon.svg" alt="" />
              <img src="/img/mongodb-icon.svg" alt="" />
              <img src="/img/postgresql-icon.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
