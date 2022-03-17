import React from "react";
import "./SearchForm.css";
import Synonyms from "./Synonyms.js"

export default function Meaning(props){
    console.log(props.meaning)
    return (
        <div>
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index} className="details">
                        <p>
                            {definition.definition}
                        </p>
                        <em>Example:{definition.example}</em>
                        <Synonyms synonyms={definition.synonyms}/>
                        </div>
                )
            })}
        </div>
    )
}