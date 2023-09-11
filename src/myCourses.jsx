import React from "react";
import "./styles.css";

class MyCourses extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Java</li>
          <img
            src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_730/https://online.crbtech.in/wp-content/uploads/2019/03/Core-Java-Pro.jpg"
            alt="Not found"
          />
          <li>Java script</li>
          <img
            src="https://www.techoriginator.com/wp-content/uploads/2019/11/JAVA_SCRIPT.jpg"
            alt="Not found"
          />
          <li>React</li>
          <img
            src="https://1.bp.blogspot.com/-FbZ8p6tIGwg/XcLfin36XlI/AAAAAAAAGX4/397-jXifwYwu6VJFdUaoJ65j1sAF4lcTACLcBGAsYHQ/s1600/learn%2Breact.png"
            alt="Not found"
          />
          <li>React Native</li>
          <img
            src="https://technocation.pk/wp-content/uploads/2022/07/React-Native.jpg"
            alt="Not found"
          />
        </ul>
      </div>
    );
  }
}

export default MyCourses;
