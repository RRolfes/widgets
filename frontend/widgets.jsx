import React from 'react';
import ReactDOM from 'react-dom';

import Clock from "./clock";
import Weather from "./weather"

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<Root />, main);
});

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Clock/>
        <Weather/>
      </div>
    )
  }
}
