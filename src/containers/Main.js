import React, { Component } from "react";
import Home from "./Home";
import Events from "./Events";
import Ranking from "./Ranking";
import Athletes from "./Athletes";
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state ={
      events: null,
      ranking: null,
      athletes: null,
    }
}

// componentDidMount(){
//   const eventsUrl = "";
//   const rankingUrl = "";
//   const athletesUrl = "";
//   fetch(eventsUrl).then(res => res.json()).then(data => this.setState({events: data.results}))
//   fetch(rankingUrl).then(res => res.json()).then(data => this.setState({ranking: data.results}))
//   fetch(athletesUrl).then(res => res.json()).then(data => this.setState({athletes: data.results}))
// }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/events"
            render={() => <Events events={this.state.events}
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
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
