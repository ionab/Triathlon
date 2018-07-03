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
        {console.log(this.state)}
        {/* <h1>{this.state.athlete.code}</h1> */}
      </div>

    )
  }
}
export default singleAthlete;
