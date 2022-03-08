import React, {useState} from "react";
import "./SearchForm.css";
import roll from "./images/roll.jpeg";
import axios from "axios";

export default function SearchForm(){
    let [wordFinal, setWordFinal] = useState("")
    let [word,setWord] = useState("")

   function handleResponse(response){
       console.log(response.data)
   }

    function search(){
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(url).then(handleResponse);
    }
    function submitWord(event){
        event.preventDefault();
        setWordFinal(word)
        search();
        event.target.reset();
    }
    function getWord(event){
        setWord(event.target.value); 
    }

    return( 
    <div className="searchForm">
        <form onSubmit={submitWord}>
            <input type="search" placehorder="Enter a word" onChange={getWord} />
            <input type="submit" value="Search"/>
        </form>
        <h3 className="text-capitalize">{wordFinal}</h3>
        <p className="noun">
            Noun
        </p>
        <p className="nounText">the power of apparently influencing events by using mysterious or supernatural forces.
         "suddenly, as if by magic, the doors start to open"</p>
        <p className="adj">
            Adjective
        </p>
        <p className="adjText">the power of apparently influencing events by using mysterious or supernatural forces.
         "suddenly, as if by magic, the doors start to open"</p>
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
    </div>)
}