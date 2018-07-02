import React from 'react';
import Favourite from '../components/Favourite';

const Favourites = (props) => {
  if (props.favourites.length === 0) return null;
  const allFavourites = props.favourites.map(favourite =>
      <Favourite favourite={favourite} />
     )
  return (
  <div>
    <h1>Fav list</h1>
  <ul>
    {allFavourites}
  </ul>
  </div>
  )

};

export default Favourites;
