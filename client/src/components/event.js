import React from "react";

const Event = function(props){
  return(
    <div>
      <button>{props.event.event_title}</button>
    </div>
  )
}


export default Event;
