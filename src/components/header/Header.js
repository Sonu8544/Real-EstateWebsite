import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuopen, setMenuOpen] = useState(false);
  const getMenuStyle = (menuopen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuopen && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className=" flexCenter innerWidth paddings h-container">
        <img src="./image/asset 11.png" alt="Logo" width={100} />
        <OutsideClickHandler
         onOutsideClick={() =>{
          setMenuOpen( false )
         }}
        >
          <div
            className=" flexCenter h-menu nav"
            style={getMenuStyle(menuopen)}
            >
            <a href="/">Residencies</a>
            <a href="/">Our Value</a>
            <a href="/">Contact US</a>
            <a href="/">Get Started</a>
            <button className="button">
              <a href="/">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* responcive */}
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
