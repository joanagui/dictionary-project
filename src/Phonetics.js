import React from "react";
import Audio from "./Audio";

export default function Phonetics(props){
    console.log(props.data);
    
    return (<div className="details">
            {props.data.phonetics.map(function(phonetic, index){
            return (
            <div key={index} className="details">
                <Audio data={phonetic}/>
            </div>)
            })}
         </div>)
}