import React, { useState, useContext } from "react";

import { LangContext } from "../../Context/LangContext";
import "./LangSwitcher.css";
import { cv as ru } from "../../Lang/ru.json";
import { cv as eng } from "../../Lang/eng.json";

export default function Switcher() {
  const contex = useContext(LangContext);
  const { setlang } = Object(contex);
  const [switcher, setswitcher] = useState("open__lang");
  if (switcher === "open__lang") {
    setlang(ru);
  } else {
    setlang(eng);
  }

  return (
    <div
      className="switcher"
      onClick={() => {
        switcher === "open__lang"
          ? setswitcher("switcher__circle__lang ")
          : setswitcher("open__lang");
      }}
    >
      <div className="switcher__back__lang">
        <div className={switcher}>
          {switcher === "open__lang" ? "ru" : "eng"}
        </div>

        {/* RU{"    "}ENG */}
      </div>
    </div>
  );
}
