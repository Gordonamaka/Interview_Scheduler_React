import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {
  //Loops through the array of days and maps it's attributes
  const days = props.days.map(day => (
    <DayListItem
    key={day.id}
    name={day.name}
    spots={day.spots}
    selected={day.name === props.day}
    setDay={(event) => props.setDay(day.name)}
    />
  ));
  return <ul>{days}</ul>
}