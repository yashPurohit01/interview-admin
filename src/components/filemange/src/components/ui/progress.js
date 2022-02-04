import React from "react";
import styles from "../styles/progress.module.css";
import { useState } from "react";

export default function Progress({ done }) {
  const [style, setstyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}`,
    };

    setstyle(newStyle);
  }, 200);

  return (
    <div className={styles.progress}>
      <div className={styles.progressDone} style={style}>
        {done}
      </div>
    </div>
  );
}
