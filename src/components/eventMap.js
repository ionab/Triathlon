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
     zoom: 4

   }
   // this.allEvents = this.allEvents.bind(this);
 }


 render() {
   const position = [this.state.lat, this.state.lng];
   return (
     <Map center={position} zoom={this.state.zoom}>
       <TileLayer
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
       />
       {/* props.allEvents.forEach(() => (props))
       console.log(event); */}
       <Marker position={position}>
         <Popup>
           <p>{this.props.allEvents[0].event_country}</p>
         </Popup>
       </Marker>
     </Map>
   );
 }
}


// ReactDOM.render(<EventMap/>, document.getElementById('container'))

export default EventMap;
