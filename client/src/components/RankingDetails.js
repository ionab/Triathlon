import React from "react";
import "./rankingDetails.css"



 const RankingDetails = function(props){
    return(
      <div  id="ranking">
        <ul>
          <li>Athlete Name: {props.details.athlete_title}</li>
          <li>Postition: {props.details.position}</li>
          <li>Splits: {props.details.splits[0]}, {props.details.splits[1]}, {props.details.splits[2]}, {props.details.splits[3]}, {props.details.splits[4]}</li>
          <li>Total Time: {props.details.total_time}</li>
          <img id="small-img" src={props.details.athlete_profile_image}/>
          <img id="small-flag" src={props.details.athlete_flag}/>
          <a href={"/athlete/" + props.details.athlete_id} >Athlete Details</a>
        </ul>
      </div>
    )
}
export default RankingDetails;
