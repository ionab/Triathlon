import React from 'react';
import './singleAthlete.css'
let getParams;


class singleAthlete extends React.Component{
  constructor(props, {match}){
    super(props);
    this.state={
      athlete: []
    }

  }

  componentDidMount(){
    const athleteUrl = "https://api.triathlon.org/v1/athletes/" + this.props.match.params.id;
    fetch(athleteUrl, {
      credentials: 'same-origin',
      headers: {
        apikey: "f199550ffbfc27ac32747b2258e49294",
        "content-type": "application/json"
      },
      mode: "cors"
    }).then(res => res.json())
    .then(data => this.setState({athlete: data.data}))
 }

  render(){
    return(
      <div>
      <div className="image">
      <img id='ath-image' src={this.state.athlete.athlete_profile_image}/>
      </div>
      <div className="athlete">
        {console.log(this.state.athlete)}
        <div id="athlete_details"> 
        <h1>{this.state.athlete.athlete_title}</h1>
        <h2><b>Country: </b>{this.state.athlete.athlete_country_name}</h2>
        <p><b>Place of Birth: </b>{this.state.athlete.place_of_birth}</p>
        <p><b>Gender: </b>{this.state.athlete.athlete_gender}</p>
        <p><b>Biography: </b> <br/>{this.state.athlete.biography}</p>
        <p>Coach: {this.state.athlete.coach}</p>
        <p>Athlete Height: {this.state.athlete.height}</p>
        </div>
      </div>
    </div>

    )
  }
}
export default singleAthlete;
