/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";
class App extends React.Component {
  state = { lat: null, Error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ Error: err.message })
    );
  }

  render() {
    if (this.state.Error && !this.state.lat) {
      return <div>error:{this.state.Error} </div>;
    }
    if (!this.state.Error && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loading />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
