import React from "react";
import roll from "./images/roll.jpeg";
import "./SearchForm.css";
import Meaning from "./Meaning";


export default function Details(props){
    if (props.data){
    return(
        <div className="details">
        <h3 className="text-capitalize">{props.data.word}</h3>
           {props.data.meanings.map(function(meaning,index){
               return <div key={index}>
                   <Meaning meaning={meaning} />
                   </div>
           })}
         
         
         <div className="container">
             <div className="row">
                 <div className="col-4">
                 <img src={roll} alt="roll" className="img-fluid rounded"></img></div>
                 <div className="col-4">
                 <img src={roll} alt="roll" className="img-fluid rounded"></img></div>
                 <div className="col-4">
                 <img src={roll} alt="roll" className="img-fluid rounded"></img></div>
             </div>
         </div>
         </div>
    ) }else{
        return null
    }
}