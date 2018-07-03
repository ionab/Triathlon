import React from 'react';
import EventMap from "../components/eventMap.js"
import Event from '../components/event.js'

// get all events
// send one event to server/back end
// render list of events

class Events extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      events: null
    }

    this.handleEventSelect = this.handleEventSelect.bind(this);
  }

  componentDidMount(){
    const eventsUrl = "https://api.triathlon.org/v1/events?per_page=200&start_date=2018-01-01&end_date=2022-01-01&region_id=10";
    fetch(eventsUrl, {
      credentials: 'same-origin',
      headers: {
        apikey: "f199550ffbfc27ac32747b2258e49294",
        "content-type": "application/json"
      },
      mode: "cors"
    }).then(res => res.json())
    .then(data => this.setState({events: data}))
  }

  handleEventSelect(event){
    const eventObject = JSON.parse(event.target.value);
    console.log("in handle event select", eventObject.event_title);
    // const result = [{event: eventObject}];
    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3001/api/favourites', true);
    request.setRequestHeader("Content-type", 'application/json');

    request.send(JSON.stringify(eventObject));
  }

  render(){
    if (!this.state.events) return null;
    const allEvents = this.state.events.data.map(event =>
      <Event event={event} />
    );

    return (
      <div>
        <h1>This is the Events homepage</h1>
        {/* {console.log(props.events.data)} */}
        <div id="map">
          <EventMap allEvents={this.state.events.data} handleAddButtonClick={this.handleEventSelect} />
        </div>
        {allEvents}
      </div>
    )
  }
};

export default Events;
