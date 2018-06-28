import React from 'react';

 const MapWrapper = function(props){
   const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
   this.map = L.map(map)
     .addLayer(osmLayer)
     .setView({this.props.location}, this.props.zoomLevel);
    return(
      <div className="map">
        {this.map}
      </div>
    )
}
export default MapWrapper;

//
//
// const MapWrapper = function(element, coords, zoom){
//
//    //dynamic API for tiles
//    const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
//
//    //sets parameters of map
//    this.map = L.map(element)
//      .addLayer(osmLayer)
//      .setView(coords, zoom);
//
// }.bind(this);
//
// //writes move to function which takes in a co-ord
// MapWrapper.prototype.moveTo = function(latlng, infomation){
//    this.map.flyTo(latlng, 4);
//    //set up popup Box here
//    L.marker(latlng).addTo(this.map).bindPopup(information).openPopup()
// }

export default MapWrapper;
