import React from "react";
import "./MyProjects.css";

const projects = [
  {
    name: "Blood donor - Front end",
    description:
      "Reminds the user when to donate blood, and shows him the nearest location",
    code: "https://github.com/startach/blood-donor-frontend",
    liveSite: "https://blood-donor.netlify.app/",
    img: "/img/BloodDonor.png",
  },
  {
    name: "Blood donor - Back end",
    description:
      "Reminds the user when to donate blood, and shows him the nearest location",
    code: "https://github.com/startach/blood-donor-backend",
    liveSite: "",
    img: "",
  },
  {
    name: "Messaging App",
    description: "Full stack messaging app. Node, React and Postgres",
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
  return (
    <div id="projects" className="myProjects">
      <div className="myProjects__container">
          <h1>Projects I've worked on</h1>
        <section className="myProjects__cardsList">
          {projects.map(({ name, description, code, liveSite, img }) => (
            <article key={name} class="card">
              <img src={img ? img : "/img/default.jpg"} alt="background" />
              <header class="card-header">
                <p>{name}</p>
                <p>{description}</p>
              </header>
              <div class="tags">
                <a className={`${!code && "hideBorder"}`} href={code}>
                  {code && "Code"}
                </a>
                <a className={`${!liveSite && "hideBorder"}`} href={liveSite}>
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
