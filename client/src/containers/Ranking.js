import React from 'react';
import RankingDetails from '../components/RankingDetails.js'

const Ranking = (props) => {
  console.log(props.ranking);
  if (!props.ranking) return null;
  const allRankings = props.ranking.data.map(ranking =>
    <RankingDetails details={ranking}/>
  )
  return (
  <div>
    {allRankings}
  </div>
  )
};

export default Ranking;
