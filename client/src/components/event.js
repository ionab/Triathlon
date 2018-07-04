import React from "react";
import "./event.css"

const Event = function(props){
  return(
    <div>
      <a href={props.event.event_listing}>{props.event.event_title}</a>
    </div>
  )
}


export default Event;
