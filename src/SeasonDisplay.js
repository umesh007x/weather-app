import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Lets go to the Beach",
    iconName: "sun",
  },
  winter: {
    text: "Burrr its chilly",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={` icon-left fas fa-${iconName} fa-9x`}></i>
      <h1>{text}</h1>
      <i className={` icon-right fas fa-${iconName} fa-9x`}></i>
    </div>
  );
};
export default SeasonDisplay;
