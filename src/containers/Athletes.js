import React from 'react';

const Athletes = (props) => {
  if (props.athletes.length === 0) return null;
  console.log('in here');
  return (
  <div>
  <h1>This is the Athletes homepage</h1>
  <p>{props.athletes.data[0].athlete_title}</p>
  {console.log(props.athletes)}
  </div>
  )

};
export default Athletes;
