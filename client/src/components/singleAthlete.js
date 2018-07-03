import React from 'react';
let getParams;

class singleAthlete extends React.Component{
  constructor(props){
    super(props);
    this.state={
      athlete: {}
    }
  }

  getParams({match}){
    {match.params.id}
  }
  componentDidMount(){
    const athleteUrl = "https://api.triathlon.org/v1/athlete/" + getParams();
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
        <p>redering page</p>
      </div>

    )
  }
}
export default singleAthlete;
