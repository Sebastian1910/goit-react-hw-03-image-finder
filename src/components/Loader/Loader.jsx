import React, { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import "./Loader.css";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}

export default Loader;
