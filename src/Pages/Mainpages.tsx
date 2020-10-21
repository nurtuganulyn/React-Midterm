import React, { useContext } from "react";
import { UserContext } from "../Context/Context";

import "./Mainpages.css";
import { LangContext } from "../Context/LangContext";
import { Route, Switch, Redirect } from "react-router-dom";
import Project from "../Components/project/Project";
import Contacts from "../Components/Contacts/Contacts";
import Todo from "../Components/Todo/Todo";
export default function Experience() {
  var contex = useContext(UserContext);
  var langcontex = useContext(LangContext);
  const { lang } = Object(langcontex);
  const { theme } = Object(contex);
  const route = (
    <Switch>
      <Route path="/project" exact component={Project} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/tasks" exact component={Todo} />

      <Redirect to="/project" />
    </Switch>
  );
  return (
    <div
      style={{
        background: theme.background,
        color: theme.foreground
      }}
    >
      <div
        className="wrapper"
        style={{ border: `1px solid ${theme.foreground}`, width: "960px" }}
      >
        <div>
          <div
            style={{
              fontSize: "25px",
              textAlign: "center",
              paddingBottom: "20px"
            }}
          >
            {lang.job}
          </div>
          <div className="resume">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Lionel_Messi_in_2018.jpg"
              width="320"
              height="240"
              className="resume__img"
              alt=""
            />
            <div style={{ margin: "40px 0" }}>
              <div>{lang.name}</div>
              <div>{lang.surname}</div>
              <div>{lang.age} лет</div>
            </div>

            <div className="resume__info">
              <div className="resume__content">
                {lang.workExp} : {lang.jobTitleAtCompany}
              </div>
              <div className="resume__content">
                {lang.skills} : {lang.skillsValue}
              </div>
              <div className="resume__content">
                {lang.education} : {lang.university},{lang.qualification}
              </div>
            </div>
          </div>
        </div>
      </div>
      {route}
    </div>
  );
}
