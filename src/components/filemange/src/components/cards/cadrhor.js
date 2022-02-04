import React from "react";
import { MdMoreVert } from "react-icons/md";
import style from "../styles/cardhr.module.css";
import { UiContext } from "../ui/uicontext";
import { useContext } from "react";

export default function Cardhor(props) {
  const { nvOpn, setsOurce, setprevState } = useContext(UiContext);

  const { name } = props;

  const hanleClick = () => {
    setsOurce(props);
    setprevState(true);
  };

  return (
    <div>
      <div className={nvOpn ? style.containeropn : style.container}>
        <div className={style.card} onClick={hanleClick}>
          <h5>
            <b>{name}</b>
          </h5>
          <i className={style.icn}>
            <MdMoreVert />
          </i>
        </div>
      </div>
    </div>
  );
}
