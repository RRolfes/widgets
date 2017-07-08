import React from 'react';

class Clock extends React.Component {
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  tick() {
    this.setState({time: new Date()});
  }

  pad(n) {
    return n < 10 ? '0' + n : n;
  }

  render() {
    return (
      <div className="clock">
        <div>
          <h1>Time:</h1>
          <p className="time">
            {this.state.time.getHours()}:
            {this.pad(this.state.time.getMinutes())}:

            {this.pad(this.state.time.getSeconds())}
          </p>
        </div>
        <div>
          <h1>Date:</h1>
          <p className="date">
            {this.state.time.toDateString()}
          </p>
        </div>
      </div>
    )
  }
}

export default Clock;
