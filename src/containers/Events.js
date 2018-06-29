import React from 'react';
// import EventMap from "../components/eventMap.js"

const Events = (props) => {
  if (!props.events) return null;
  console.log('in here');
  return (
  <div>
  <h1>This is the Events homepage</h1>
  
  {console.log(props.events.data)}
  </div>
  )
};
export default Events;
