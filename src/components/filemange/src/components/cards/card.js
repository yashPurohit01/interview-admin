import React from "react";
import { FcFolder } from "react-icons/fc";
import style from "../styles/card.module.css";
import { UiContext } from "../ui/uicontext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Card() {
  const { nvOpn } = useContext(UiContext);

  return (
    <div>
      <div className={nvOpn ? style.container : style.containercls}>
        <Link to="/documents">
          <div className={style.crd}>
            <FcFolder className={style.icn} />
            <h5>
              <b>Documents</b>
            </h5>
          </div>
        </Link>

        <Link to="/media">
          <div className={style.crd}>
            <FcFolder className={style.icn} />
            <h5>
              <b>Media</b>
            </h5>
          </div>
        </Link>

        {/* <Link to="/recents">
          <div className={style.crd}>
            <FcFolder className={style.icn} />
            <h5>
              <b>recents</b>
            </h5>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
