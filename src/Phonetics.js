import React from "react";
import Audio from "./Audio";

export default function Phonetics(props){
    console.log(props.data);
    
    return (<div className="detailsPhonetics">
            {props.data.phonetics.map(function(phonetic, index){
            return (
            <div key={index} className="detailsPhonetics">
                <Audio data={phonetic}/>
            </div>)
            })}
         </div>)
}