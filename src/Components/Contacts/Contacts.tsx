import React, { useContext } from "react";

import { UserContext } from "../../Context/Context";
import { LangContext } from "../../Context/LangContext";
import "./Contacts.css";

export default function Experience() {
  var contex = useContext(UserContext);
  var langcontex = useContext(LangContext);
  const { theme } = Object(contex);
  const { lang } = Object(langcontex);
  return (
    <div
      style={{
        background: theme.background,
        color: theme.foreground,
      }}
      className="contact__wrapper"
    >
      <div>
        {lang.email} : {lang.emailValue}
      </div>
      <div>
        {lang.website} : <a href={lang.websiteValue}>{lang.websiteValue}</a>
      </div>
      <div>
        {lang.mobile} : {lang.mobileValue}
      </div>
    </div>
  );
}
