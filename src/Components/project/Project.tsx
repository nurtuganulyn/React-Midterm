import React, { useContext } from "react";

import { UserContext } from "../../Context/Context";
import "./Project.css";

export default function Project() {
  var contex = useContext(UserContext);
  const { theme } = Object(contex);
  return (
    <div
      style={{
        background: theme.background,
        color: theme.foreground
      }}
    >
      <div className="project__wrapper">
        <a
          href="https://codesandbox.io/s/tender-meitner-elu7o"
          className="project__item"
          target="_blank"
          style={{
            color: theme.foreground
          }}
        >
          Note app
        </a>
        <a
          href="https://codesandbox.io/s/dawn-dust-0gs46"
          className="project__item"
          target="_blank"
          style={{
            color: theme.foreground
          }}
        >
          Shop app
        </a>
        <a
          href="https://codesandbox.io/s/happy-mahavira-uygwj"
          className="project__item"
          target="_blank"
          style={{
            color: theme.foreground
          }}
        >
          Regist app
        </a>
      </div>
    </div>
  );
}
