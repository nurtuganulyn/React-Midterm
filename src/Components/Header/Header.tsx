import React, { useContext } from "react";
import { UserContext } from "../../Context/Context";

import "./Header.css";
import { NavLink } from "react-router-dom";
import Switcher from "../Switcher/Switcher";
import LangSwitcher from "../../Components/LangSwitcher/LangSwitcher";
import { LangContext } from "../../Context/LangContext";

export default function Header() {
  var contex = useContext(UserContext);
  const { theme } = Object(contex);
  var langcontex = useContext(LangContext);
  const { lang } = Object(langcontex);
  return (
    <div className="header__wrapper" style={{ color: theme.foreground }}>
      <Switcher />
      <NavLink
        to="/contacts"
        className="header__link"
        style={{ color: theme.foreground }}
      >
        {lang.contacts}
      </NavLink>

      <NavLink
        to="/project"
        className="header__link"
        style={{ background: theme.background, color: theme.foreground }}
      >
        {lang.projects}
      </NavLink>
      <NavLink
        to="/tasks"
        className="header__link"
        style={{ background: theme.background, color: theme.foreground }}
      >
        {lang.task}
      </NavLink>
      <LangSwitcher />
    </div>
  );
}
