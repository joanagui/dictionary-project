import React from "react";
import "./SearchForm.css";
import Synonyms from "./Synonyms.js"

export default function Meaning(props){
    console.log(props.meaning)
    return (
        <div>
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index} className="detailsMeaning">
                    <h3 className="text-capitalize">{props.meaning.partOfSpeech}</h3>
                    <p>
                    {definition.definition}
                    </p>
                    <p className="example">{definition.example}</p>
                    <Synonyms synonyms={definition.synonyms}/>
                    </div>
                )
            })}
        </div>
    )
}