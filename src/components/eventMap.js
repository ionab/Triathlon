import React from 'react'
// import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './eventMap.css'

class EventMap extends React.Component {

 constructor(props) {
   super(props)
   this.state = {
     lat: 51.505,
     lng: -0.09,
     zoom: 1
   }
 }
 render() {
   const position = [this.state.lat, this.state.lng];
   let allEventPopup;
   return (
     <Map center={position} zoom={this.state.zoom}>
       <TileLayer
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
       />
       {allEventPopup = this.props.allEvents.map(event =>
         <Marker position={[event.event_latitude, event.event_longitude]}>
           <Popup>
             <p>{event.event_country}</p>
           </Popup>
         </Marker>
       )}
     </Map>
   );
 }
}

export default EventMap;
