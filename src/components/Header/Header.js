import React from "react";
import "./Header.css";

const menuItems = [
  {
    label: "Home",
    id: "#about",
  },
  {
    label: "Projects",
    id: "#projects",
  },
  {
    label: "Hire me!",
    id: "#hireme",
  },
];

function Header() {
  return (
    <div className="header">

    <div className="header__container">
      <div className="header__items">
        {menuItems.map(({ label, id }) => (
          <a href={id}>
            <div className="header__labels">{label}</div>
          </a>
        ))}
      </div>

      <img className="header__logo" src="/img/code.svg" alt="header" />
    </div>
    </div>
  );
}

export default Header;
