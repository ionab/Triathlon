import React from 'react';
import Athlete from '../components/Athlete';

const Athletes = (props) => {
  if (props.athletes.length === 0) return null;
  const allAthletes = props.athletes.data.map(athlete =>
      <Athlete athlete= {athlete} />
     )
  return (
  <div>
  <h1>This is the Athletes homepage</h1>
  <ul>
    {allAthletes}
  </ul>
  {console.log(props.athletes)}
  </div>
  )

};
export default Athletes;
