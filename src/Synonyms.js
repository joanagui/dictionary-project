import React from "react";

export default function Synonyms(props){
    console.log(props.synonyms)
    if(props.synonyms.length >= 1){ return (
        <div className="synonyms">
             <strong>Synonyms:</strong>
        {props.synonyms.map(function(synonym,index){
            return (
                <div key={index} className="detailsLi">
                   {synonym}
                    </div>
            )
        })}
            </div>
    )
} else {
    return null
}}