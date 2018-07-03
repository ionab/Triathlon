import React from 'react';
import RankingDetails from '../components/RankingDetails.js'


class Ranking extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ranking: null
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

  }
  render(){
    if (!this.state.ranking) return null;
    const allRankings = this.state.ranking.data.results.map(ranking =>
      <RankingDetails details={ranking}/>
    )
    return(
      <div>
        <h2>2015 ITU World Triathlon Gold Coast Results</h2>
        {allRankings}
      </div>

    )
  }
}

export default Ranking;
