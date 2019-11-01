import React from "react"
import { directive } from "@babel/types";

function Card(props) {
  return (
  <div>
    <img src={props.image} className="custom-images" id={props.id} onClick={() =>{props.click(props.id)}} alt=""></img>
  </div>
  )
  }

export default Card;