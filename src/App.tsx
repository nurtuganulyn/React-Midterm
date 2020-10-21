import React, { useState } from "react";
import {} from "react-router-dom";

import { UserContext } from "./Context/Context";
import { LangContext } from "./Context/LangContext";
import { cv as ru } from "./Lang/ru.json";
import Mainpages from "./Pages/Mainpages";
import { Theme } from "./Store/information";

import Header from "./Components/Header/Header";
function App() {
  const [theme, settheme] = useState(Theme.light);
  const [lang, setlang] = useState(ru);

  return (
    <UserContext.Provider value={{ theme, settheme }}>
      <LangContext.Provider value={{ lang, setlang }}>
        <div
          style={{
            background: theme.background
          }}
        >
          <div
            style={{
              height: "100vh",
              margin: "0 auto"
            }}
          >
            <Header />
            <Mainpages />
          </div>
        </div>
      </LangContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
