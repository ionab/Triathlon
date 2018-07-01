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

      {console.log(props.events.data)}
      <div id="map">
        <EventMap allEvents={props.events.data} />
      </div>
      {allEvents}
    </div>
  )
};
export default Events;
