import React, { useEffect } from "react";
import Cardhor from "../cards/cadrhor";
import Card from "../cards/card";

import { storage } from "../data/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import style from "../styles/home.module.css";
import dumData from "../data/dummyprev.json";

export default function Home2() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    function listFiles() {
      const storageRef = ref(storage, "images");

      const hlD = [];

      listAll(storageRef).then((res) => {
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            hlD.push(url);
          });
        });
      });

      setData(hlD);
    }

    listFiles();
  }, []);

  console.log(Data);

  return (
    <div>
      <div className={style.main}>
        <Card />

        {dumData.map((dat) => (
          <Cardhor key={dat.id} name={dat.name} url={dat.url} date={dat.date} type={dat.type} />
        ))}
      </div>
    </div>
  );
}
