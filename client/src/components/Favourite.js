import React from "react";

const Favourite = function(props){


  return(
    <div>
      <h4>{props.favourite.event_title}</h4>
      <p>{props.favourite.event_date}</p>
      <p>Country: {props.favourite.event_country}</p>
      <p>Venue: {props.favourite.event_venue}</p>
      <a href={props.favourite.event_listing}>More info</a>

    </div>
      )
    }
export default Favourite;
