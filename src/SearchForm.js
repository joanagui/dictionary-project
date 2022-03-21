import React, {useState} from "react";
import "./SearchForm.css";
import axios from "axios";
import Details from "./Details.js"

export default function SearchForm(){
    let [word,setWord] = useState("")
    let [data, setData] = useState(null)

   function handleResponse(response){
       console.log(response.data[0])
      setData(response.data[0])
   }

    function search(){
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(url).then(handleResponse);
    }
    function submitWord(event){
        event.preventDefault();
        search();
        event.target.reset();
    }
    function getWord(event){
        setWord(event.target.value); 
    }

    return( 
    <div >
        <section>
        <form onSubmit={submitWord} className="searchForm">
            <input type="search" placehorder="Enter a word" onChange={getWord} />
            <input type="submit" value="Search"/>
        </form>
        </section>
        <Details data={data}/>
    </div>)
}