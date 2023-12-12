import React from "react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/produits">Produits</a>
          </li>
          <li>
            <a
              href="#"
              onClick={handleDropdownToggle}
              className={isDropdownOpen ? "active" : ""}
            >
              À propos
            </a>
            <ul
              className={isDropdownOpen ? "show" : ""}
              style={{
                display: isDropdownOpen ? "block" : "none",
              }}
            >
              <li><a href="/a-propos">Qui sommes-nous ?</a></li>
              <li><a href="/nos-valeurs">Nos valeurs</a></li>
              <li><a href="/nos-engagements">Nos engagements</a></li>
            </ul>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
