import React from "react";
import './index.css'

function BlockInf(props){
    return (
        <div className="block">
          <img src={props.img} alt={props.alt}/>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      );
}


export default BlockInf