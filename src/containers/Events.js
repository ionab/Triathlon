import React from 'react';
import EventMap from "../components/eventMap.js"
import Event from '../components/event.js'

const Events = (props) => {
  if (!props.events) return null;
  const allEvents = props.events.data.map(event =>
    <Event event={event} />
  )
  return (
    <div>
      <h1>This is the Events homepage</h1>
      {allEvents}
      {console.log(props.events.data)}
      <div id="map">
        <EventMap allEvents={allEvents}/>
      </div>
    </div>
  )
};
export default Events;
