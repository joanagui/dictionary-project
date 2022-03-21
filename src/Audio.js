import React from "react";

export default function Audio(props){
    console.log(props.data)
if(props.data.audio){
    return(<div className="audio">
        <a href={props.data.audio} target="_blank" rel='noreferrer'>Listen</a> : 
        {props.data.text}
        </div>)
} else { return null}}