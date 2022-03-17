import React from "react";
import "./SearchForm.css";

export default function Meaning(props){
    console.log(props.meaning)
    return (
        <div>
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                         <br/>
                        <p>
                            {definition.definition}
                        </p>
                        <em>{definition.example}</em>
                        
                        </div>
                )
            })}
            <p>{props.meaning.definitions[0].definition}</p>
            <p>{props.meaning.definitions[0].example}</p>
        </div>
    )
}