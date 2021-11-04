import React from "react";
import cat from "../../images/Cat.png";
import { WithMouse } from "./WithMouse";

class Cat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mouse = this.props.mouse;
    return (
      <img src={cat} style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: '100px', height: '100px' }} />
    );
  }
}

export default WithMouse(Cat);