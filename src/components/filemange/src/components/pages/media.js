import React from "react";
import style from "../styles/home.module.css";
import dumD from "../data/dummyprev.json"
import Cardhor from "../cards/cadrhor";

export default function Media() {
  return (
    <div>
      <div className={style.main}>
      {dumD
          .filter((dat) => dat.type === "jpg")
          .map((dat) => (
            <Cardhor
              key={dat.id}
              name={dat.name}
              url={dat.url}
              date={dat.date}
              type={dat.type}
            />
          ))}
      </div>
    </div>
  );
}
