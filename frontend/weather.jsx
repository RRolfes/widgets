import React from 'react';

class Weather extends React.Component {
  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      weather: {
        name: undefined,
        main: {
          temp: undefined
        }
      }

    };
  }

  getWeather(location) {
    console.log(location);
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f2c5317e0b234e39360c02f46d86127d`

    const req = new XMLHttpRequest();
      req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE ) {
          if (req.status === 200) {
            const res = JSON.parse(req.responseText);
            console.log(res);
            this.setState({ weather: res });
            console.log(this.state.weather);
          } else if (req.status === 400){
            alert("error 400");
          } else {
            alert("something messed up. idk.")
          }
        }
      }

    req.open("GET", url);
    req.send();
  }

  render() {
    return (
      <div>
        <h1>Weather:</h1>
        <p className="weather">
          {this.state.weather.name}<br/>
          {this.state.weather.main.temp}
        </p>
      </div>
    )
  }
}

export default Weather;
