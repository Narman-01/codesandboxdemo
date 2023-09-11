import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import WakeupGreeting from "./wakeupGreeting";
import MyCourses from "./myCourses";

const name = "Narman";
const register_number = 180129;

const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDom.render(
  <div>
    <h1 className="headingname" contentEditable="true">
      Hello {name}
    </h1>
    <WakeupGreeting />
    <h3 className="subheading" contentEditable="true">
      Your registration number is {register_number}{" "}
    </h3>
    <p>these are your courses</p>
    <MyCourses />
    <div>
      <p>@Copyright {year}</p>
    </div>
  </div>,
  document.getElementById("root")
);
