import React from 'react';
import Favourite from '../components/Favourite.js';
import FavMap from "../components/favMap.js"
import './favouritesList.css'

class Favourites extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favourites: []
    }
  }
  componentDidMount(){
    const MongoUrl = 'http://localhost:3001/api/favourites';
    fetch(MongoUrl, {
      mode: "cors"
    }).then(res => res.json()).then(favourites => this.setState(
      {
        favourites: favourites
      }
    ))
  }

  render(){
    if (!this.state.favourites) return null;
    const allFavourites = this.state.favourites.map(favourite =>
        <Favourite favourite={favourite} />
       )
    return(<div>
        <div id="map">
          <FavMap allEvents={this.state.favourites}/>
        </div>

      <h1>i-Tri Favourite Events</h1>
        <div className="allFavourites">
      <ul>{allFavourites}</ul>
      </div>
    </div>)
  }
}


export default Favourites;
