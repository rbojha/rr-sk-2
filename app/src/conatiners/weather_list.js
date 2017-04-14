import * as React from "react";
import { connect } from "react-redux";
import { Chart } from "../components/chart"

class WeatherList extends React.Component {
  renderWeather(cd) {
    const cityName = cd.city.name;
    const temps = cd.list.map(w => w.main.temp);
    const pressures = cd.list.map(w => w.main.pressure);
    const humidities = cd.list.map(w => w.main.humidity);

    console.log(temps, pressures, humidities);

    return <tr key={cityName}>
      <td>{cityName}</td>
      <td><Chart data={temps} color="red" units={"K"}></Chart></td>
      <td><Chart data={pressures} color="green" units={"hPa"}></Chart></td>
      <td><Chart data={humidities} color="blue" units={"%"}></Chart></td>
    </tr>;
  }

  render() {
    return <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (nhPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
    </table>
  }
}

function mapStateToProps({weather}) {
  return { weather };
}

export const WeatherListConnect = connect(mapStateToProps)(WeatherList)
