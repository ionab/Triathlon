import React from 'react';
import RankingDetails from '../components/RankingDetails.js'

const Ranking = (props) => {
  console.log("hello is it me youre looking for", props.ranking);
  if (!props.ranking) return null;
  const allRankings = props.ranking.data.results.map(ranking =>
    <RankingDetails details={ranking}/>
  )
  return (
  <div>
    <h2>2015 ITU World Triathlon Gold Coast Results</h2>
    {allRankings}
  </div>
  )
};

export default Ranking;
