import React from "react";
import style from "./Navbar.module.css";

function Navbar() {

  return (
    
      <nav className={style.mainnav}>
        <div className={style.logo}>
          <h2>
            <span className={style.logonav}>shivila</span>
          </h2>
        </div>
      
              <input className={style.search} type="search" placeholder="search..."/>
      </nav>
    
  );
}

export default Navbar;
