import React from "react";
import "components/Appointment/styles.scss";


const appointmentMsg = function(props) {
  const time = props.time;
  let returnStr = '';
  if (!time) {
    returnStr = `No appointments`
  } else {
    returnStr = `Appointment at ${time}`
  }
  return returnStr;
}


export default function Appointment(props) {
    const message = appointmentMsg(props)
       
    return (
        
      <article className= 'appointment' >{message}</article>
    
    );

}
