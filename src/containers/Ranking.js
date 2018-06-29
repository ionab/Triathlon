import React from 'react';

const Ranking = (props) => {
  if (!props.ranking) return null;
  console.log('in here');
  return (
  <div>
  <h1>This is the Rankings homepage</h1>

  {console.log(props.ranking.data)}
  </div>
  )
};

export default Ranking;
