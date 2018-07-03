import React from 'react';
import Athlete from '../components/Athlete';

class Athletes extends React.Component{
  constructor(props){
    super(props);
    this.state={
      athletes: []
    }
  }
  componentDidMount(){
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
  render(){
  if (!this.state.events) return null;
      const allAthletes = this.state.athletes.data.map(athlete =>
      <Athlete athlete={athlete} />
    );
    // console.log(this.state.match.params.id)
    return (
      <div>
        <h1>This is the Athletes homepage</h1>
        <ul>
          {allAthletes}
        </ul>
      </div>
    )
  }
};

export default Athletes;
