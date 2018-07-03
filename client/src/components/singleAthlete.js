import React from 'react';
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
        {console.log(this.state.athlete)}
        <h1>{this.state.athlete.athlete_title}</h1>
        <h2>{this.state.athlete.athlete_country_name}</h2>
        <p>{this.state.athlete.athlete_gender}</p>
        {/* <img src={this.state.data.athlete_profile_image}/> */}
        <p>{this.state.athlete.biography}</p>
        <p>{this.state.athlete.coach}</p>
        <p>{this.state.athlete.height}</p>
        <p>{this.state.athlete.place_of_birth}</p>



      </div>

    )
  }
}
export default singleAthlete;
