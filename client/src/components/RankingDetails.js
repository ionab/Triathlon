import React from "react";

 const RankingDetails = function(props){
    return(
      <div className="rankingDetails">
        <ul>
          <li>Athlete Name: {props.details.athlete_title}</li>
          <li>Postition: {props.details.position}</li>
          <li>Splits: {props.details.splits[0]}, {props.details.splits[1]}, {props.details.splits[2]}, {props.details.splits[3]}, {props.details.splits[4]}</li>
          <li>Total Time: {props.details.total_time}</li>
          <img src="{props.details.athlete_profile_image}"/>
          <img src="{props.details.athlete_flag}"/>
        </ul>
      </div>
    )
}
export default RankingDetails;
