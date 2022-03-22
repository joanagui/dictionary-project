import React from "react";

import "./SearchForm.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics.js"


export default function Details(props){
    if (props.data){
    return(
        <div>
        <h3 className="text-capitalize word">{props.data.word}</h3>
        
        <Phonetics data={props.data}/>
           {props.data.meanings.map(function(meaning,index){
               return <div key={index}>
                   <Meaning meaning={meaning} />
                   </div>
           })}
         </div>
    ) }else{
        return null
    }
}