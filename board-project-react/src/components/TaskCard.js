import React from "react";

export default function TaskCard(props){

    return(
    <div>
    <h3>{props.title}</h3>
    <h4>{props.assignee}</h4>
    <p>{props.date}</p>
    <div>Completed? &nbsp; <input type='checkbox'/></div>
    <textarea >{props.details}</textarea>
    </div>
    );
}