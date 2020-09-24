import React, { useState } from "react";
import "./MyProjects.css";

const projects = [
  {
    name: "Blood donor - Front end",
    description:
      "Reminds the user when to donate blood, and shows him the nearest location - Mobile only!",
    code: "https://github.com/startach/blood-donor-frontend",
    liveSite: "https://blood-donor.netlify.app/",
    img: "/img/BloodDonor.png",
  },
  {
    name: "Blood donor - Back end",
    description:
      "Back end for the Blood Donor Mobile web application!",
    code: "https://github.com/startach/blood-donor-backend",
    liveSite: "",
    img: "",
  },
  {
    name: "Messaging App",
    description: "Full stack messaging app. Node, React and Postgres.",
    code: "https://github.com/Marwanrizik91/Marwan-Rizik-27-7-2020",
    liveSite: "https://herolo-test.netlify.app/",
    img: "/img/messagingApp.png",
  },
  {
    name: "Amazon Clone",
    description:
      "Amazon clone, Reactjs, Firebase cloud functions and database.",
    code: "https://github.com/Marwanrizik91/Amazon-clone",
    liveSite: "https://clone-f38c5.web.app/",
    img: "/img/amazonClone.png",
  },
];

function MyProjects() {

  const [carouselElement, setCarouselElement] = useState(projects[0])
  const [clickDirection, setClickDirection] = useState(undefined)

  const setNextElement = () => {
    const atIndex = projects.indexOf(carouselElement)
    if(atIndex === projects.length - 1){

      setClickDirection(true)
      setCarouselElement(projects[0])
    } else {

      setClickDirection(true)
      setCarouselElement(projects[atIndex + 1])
    }
  }

  const setPreviousElement = () => {
    const atIndex = projects.indexOf(carouselElement)
    if(atIndex === 0){
      setClickDirection(false)
      setCarouselElement(projects[projects.length - 1])
    } else {
      setClickDirection(false)
      setCarouselElement(projects[atIndex - 1])
    }
  }

  
  return (
    
    <div id="projects" className="myProjects">
      <div className="myProjects__container">
          <h1>Projects I've worked on</h1>
          <div className="myProjects__carousel">
          <article key={carouselElement.name} className={`carousel__Element ${clickDirection? 'right' : 'left'}`}>
              <img src={carouselElement.img ? carouselElement.img : "/img/default.jpg"} alt="background" />
              <header class="card-header">
                <div>
                <h3>{carouselElement.name}</h3>
                </div>
                <p>{carouselElement.description}</p>
              </header>
              <div class="tags">
                <a className={`${!carouselElement.code && "hideBorder"}`} href={carouselElement.code} target="_blank" rel="noopener noreferrer">
                  {carouselElement.code && "Code"}
                </a>
                <a className={`${!carouselElement.liveSite && "hideBorder"}`} href={carouselElement.liveSite} target="_blank" rel="noopener noreferrer">
                  {carouselElement.liveSite && "Live"}
                </a>
              </div>
              <div className="carousel__RightArrow" onClick={setNextElement} ></div>
              <div className="carousel__LeftArrow" onClick={setPreviousElement}></div>
            </article>
          </div>
          
        <section className="myProjects__cardsList">

          {projects.map(({ name, description, code, liveSite, img }) => (
            <article key={name} class="card">
              <img src={img ? img : "/img/default.jpg"} alt="background" />
              <header class="card-header">
              <div>
                <h4>{carouselElement.name}</h4>
                </div>
                <p>{description}</p>
              </header>
              <div class="tags">
                <a className={`${!code && "hideBorder"}`} href={code} target="_blank" rel="noopener noreferrer">
                  {code && "Code"}
                </a>
                <a className={`${!liveSite && "hideBorder"}`} href={liveSite} target="_blank" rel="noopener noreferrer">
                  {liveSite && "Live"}
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

export default MyProjects;
