
import React from "react";
import LaunchItem from "./LaunchItem";

export default function LaunchedRocket(props) {
  return props.data.map(launch => <LaunchItem key={launch.flight_number} launch={launch} />)
} 
