import React, { Component } from "react";
import Home from "./Home";
import Events from "./Events";
import Ranking from "./Ranking";
import Athletes from "./Athletes";
import NavBar from "./NavBar";
import singleAthlete from '../components/singleAthlete'
import Favourites from "./Favourites";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./main.css";
// import eventMap from "./eventMap";
let ComponentWithRegex;
class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/events" component={Events} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/athlete/:id" component={singleAthlete}/>
        </React.Fragment>
      </Router>
    )
  }
//   Child = ({ match }) => (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// );
//
// singleAthlete = ({ match }) => (
//   <div>
//     <h3>{match.params.id}</h3>
//   </div>
// );
}

export default Main;
