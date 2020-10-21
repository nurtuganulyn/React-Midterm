import React, { useState, useContext } from "react";

import { UserContext } from "../../Context/Context";
import "./Switcher.css";
import { Theme } from "../../Store/information";

export default function Switcher() {
  const contex = useContext(UserContext);
  const { settheme } = Object(contex);
  const [switcher, setswitcher] = useState("open");
  if (switcher === "open") {
    settheme(Theme.dark);
  } else {
    settheme(Theme.light);
  }

  return (
    <div
      className="switcher"
      onClick={() => {
        switcher === "open"
          ? setswitcher("switcher__circle ")
          : setswitcher("open");
      }}
    >
      <div className="switcher__back">
        <div className={switcher}></div>
      </div>
    </div>
  );
}
