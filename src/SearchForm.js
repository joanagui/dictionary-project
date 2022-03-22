import React, {useState} from "react";
import "./SearchForm.css";
import axios from "axios";
import Details from "./Details.js"
import Photos from "./Photos.js"

export default function SearchForm(){
    let [word,setWord] = useState("")
    let [data, setData] = useState(null)
    let [photos, setPhotos] = useState(null);

   function handleResponse(response){
       console.log(response.data[0])
      setData(response.data[0])
   }
   function handlePexels(response){
       console.log(response.data.photos)
       setPhotos(response.data.photos)
   }

    function search(){
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(url).then(handleResponse);

        let apiKey="563492ad6f91700001000001b6d9d8810cdb42e4b9e6ca33bc8f9c1f";
        let urlApi=`https://api.pexels.com/v1/search?query=${word}&per_page=3`;
        let headers = { Authorization: `Bearer ${apiKey}`};
        axios.get(urlApi, {headers: headers}).then(handlePexels);
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
        <Photos photos={photos}/>
  </div>)
}