import React, { Component } from "react";

export default class Ccomponent extends Component {
  // State
  constructor(props) {
    super(props);

    this.state = {
      name: "Ihor",
    };
  }
  render() {
    const name = this.props.name;
    const desc = this.props.desc;
    return (
      <div>
        <h1>
          <b>{name}</b>
          {desc}
        </h1>
      </div>
    );
  }
}

Ccomponent.defaultProps = { name: "Company name" };
