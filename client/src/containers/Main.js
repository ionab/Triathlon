import React, { Component } from "react";
import Home from "./Home";
import Events from "./Events";
import Ranking from "./Ranking";
import Athletes from "./Athletes";
import NavBar from "./NavBar";
import Favourites from "./Favourites";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./main.css";
// import eventMap from "./eventMap";




class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      ranking: null,
      athletes: [],
    }

  }

  componentDidMount(){



    const rankingUrl = "https://api.triathlon.org/v1/events/90162/programs/270563/results?";
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


  render() {
    // console.log(this.state.events);
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/events" component={Events} />
          <Route path="/ranking"
            render={() => <Ranking ranking={this.state.ranking} />}
          />
          <Route path="/favourites" component={Favourites} />
          <Route path="/athletes/:id"
            component={Athletes}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
