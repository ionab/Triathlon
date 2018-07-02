import React, { Component } from "react";
import Home from "./Home";
import Events from "./Events";
import Ranking from "./Ranking";
import Athletes from "./Athletes";
import NavBar from "./NavBar";
import Favourites from "./Favourites";
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import eventMap from "./eventMap";




class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      events: null,
      ranking: null,
      athletes: [],
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
    const rankingUrl = "https://api.triathlon.org/v1/rankings";
    fetch(rankingUrl, {
      credentials: 'same-origin',
      headers: {
        apikey: "f199550ffbfc27ac32747b2258e49294",
        "content-type": "application/json"
      },
      mode: "cors"
    }).then(res => res.json())
    .then(data => this.setState({ranking: data}))


    const athletesUrl = "https://api.triathlon.org/v1/athletes?per_page=100";
    fetch(athletesUrl, {
      credentials: 'same-origin',
      headers: {
        apikey: "f199550ffbfc27ac32747b2258e49294",
        "content-type": "application/json"
      },
      mode: "cors"
    }).then(res => res.json())
    .then(data => this.setState({athletes: data}))
  }

  handleEventSelect(event){
    const eventObject = JSON.parse(event.target.value);
    console.log("in handle event select", eventObject.event_title);
    // part1
    // write the event object to the data base.
    // refresh browser and go to favourites to see the new event after being refreshed.
    // part2
    // re-render this component ^
    // using setState we can then re0-render the web page

  }



  render() {
    // console.log(this.state.events);
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/events"
          render={() => <Events  onFavouriteClicked={this.handleEventSelect} events={this.state.events}
          />}
        />
        <Route path="/ranking"
        render={() => <Ranking ranking={this.state.ranking}
        />}
      />
      <Route path="/athletes"
      render={() => <Athletes athletes={this.state.athletes}
      />}
    />
    <Route path="/favourites"
    render={() => <Favourites  favourites={this.state.favourites}
    />}
  />
</React.Fragment>
</Router>
);
}



}





export default Main;
