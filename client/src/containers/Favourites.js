import React from 'react';
import Favourite from '../components/Favourite.js';
import FavMap from "../components/favMap.js"
import './favouritesList.css'


const Favourites = (props) => {
console.log(props, "props");
  if (!props.favourites) return null;
  console.log('here', props.favourites);
  const allFavourites = props.favourites.map(favourite =>
      <Favourite favourite={favourite} />
     )
  return (
  <div>
      {/* {console.log(props)} */}
      <div id="map">
        <FavMap allEvents={props.favourites}/>
      </div>

    <h1>iTri Favourite Events</h1>
      <div className="allFavourites">
    <ul>{allFavourites}</ul>
    </div>
  </div>
  )
};

export default Favourites;
