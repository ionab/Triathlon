import React from 'react';
import Favourite from '../components/Favourite.js';

const Favourites = (props) => {
console.log(props, "props");
  if (!props.favourites) return null;
  const allFavourites = props.favourites.map(favourite =>
      <Favourite favourite={favourite} />
     )
  return (
  <div>
      {console.log(props)}
    <h1>Fav list</h1>
    <ul>{allFavourites}</ul>
  </div>
  )
};

export default Favourites;
