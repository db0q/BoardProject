import React from "react";
import '../App.css'
export default function TaskCard(props){

    return(
    <div className='forms' style={{display:'flex',flexDirection:'column',width:'20rem',padding:'20px'}}>
    <h3 id='tasks'>{props.title}</h3>
    <h4 id='tasks'>{props.assignee}</h4>
    <p id='tasks'>{props.date}</p>
    <div id='tasks'>Completed? &nbsp; <input type='checkbox'/></div>
    <textarea id='tasks'>{props.details}</textarea>
    </div>
    );
}