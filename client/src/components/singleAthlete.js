import React from 'react';
let getParams;

class singleAthlete extends React.Component{
  constructor(props, {match}){
    super(props);
    this.state={
      athlete: null
    }
    this.getParams = this.getParams.bind(this);
  }

  getParams(props){
    console.log(props.match.params.id);
    {props.match.params.id}
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
    .then(data => this.setState({athlete: data}))
 }

  render(){
    return(
      <div>
        {console.log(this.state.athlete)}
        {/* <h1>{this.state.athlete.data.athlete_title}</h1>
        <h2>{this.state.athlete.data.athlete_country_name}</h2>
        <p>{this.state.athlete.data.athlete_gender}</p>
        <img src={this.state.athlete.data.athlete_profile_image}/>
        <p>{this.state.athlete.data.biography}</p>
        <p>{this.state.athlete.data.coach}</p>
        <p>{this.state.athlete.data.height}</p>
        <p>{this.state.athlete.data.place_of_birth}</p> */}



      </div>

    )
  }
}
export default singleAthlete;
