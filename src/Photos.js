import React from "react";


export default function Photos(props){
console.log(props.photos)
if (props.photos){
return (
<div className="detailsMeaning"><div className="row">
    {props.photos.map(function(photo,index){
     return(
    <div className="col-4">
    <img src={photo.src.landscape} alt="roll" className="img-fluid rounded"></img></div>
      ) 
    })} 
</div>
</div>)
} else { return null}
}