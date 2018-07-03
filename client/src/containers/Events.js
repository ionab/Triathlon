import React from 'react';
import EventMap from "../components/eventMap.js"
import Event from '../components/event.js'
import './events.css'

const Events = (props) => {
  if (!props.events) return null;
  const allEvents = props.events.data.map(event =>
    <Event event={event} />
  )

  return (
    <div>
      <h1>iTri European Events 2018</h1>
      {console.log(props.events.data)}
      <div id="map">
        <EventMap allEvents={props.events.data} handleAddButtonClick={props.onFavouriteClicked} />
      </div>
      <div className="allEvents">
      {allEvents}
    </div>
    </div>
  )
};
export default Events;
