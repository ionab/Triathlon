import React from "react";

 const RankingDetails = function(props){
    return(
      <div className="rankingDetails">
        <ul>
          <li>Ranking ID: {props.details.ranking_id}</li>
          <li>Ranking Category: {props.details.ranking_cat_id}</li>
          <li>Ranking Category Name: {props.details.ranking_cat_name}</li>
          <li>Ranking Name: {props.details.ranking_name}</li>
          <li>Region ID: {props.details.region_id}</li>
          <li>Region Name: {props.details.region_name}</li>
          <li>Week: {props.details.week}</li>
        </ul>
      </div>
    )
}
export default RankingDetails;
