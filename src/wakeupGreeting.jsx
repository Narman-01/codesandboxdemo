import React from "react";
import "./styles.css";

class WakeupGreeting extends React.Component {
  render() {
    // Get the current time
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const customStyle = {
      color: ""
    };

    // Define different greetings based on the time of day
    let greeting;
    if (hours < 12) {
      greeting = "Good morning!";
      customStyle.color = "red";
    } else if (hours < 18) {
      greeting = "Good afternoon!";
      customStyle.color = "green";
    } else {
      greeting = "Good evening!";
      customStyle.color = "blue";
    }

    return (
      <div>
        <h3 className="heading" style={customStyle}>
          {greeting}, Welcome to our website.
        </h3>
      </div>
    );
  }
}

export default WakeupGreeting;
