import React from 'react';
import MapWrapper from "./MapWrapper.js"


class EventMap extends React.Component(){
  constructor(props){
    super(props);
    this.state ={
      location: [55.854979, -4.243281],
      zoomLevel: 2
    }
  render() {
    return (
      <div>
        <MapWrapper location={this.state.location} zoomLevel={this.state.zoomLevel}/>
      </div>
    )
  }

}



export default EventMap;
