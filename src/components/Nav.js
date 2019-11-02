import React from "react"
// import { directive, tsPropertySignature } from "@babel/types"


function Nav(props) {
    return<nav className="navbar navbar-light bg-light" className="navText">
    <ul>
        <li className="brand">Clicky Game</li>
        <li className>Click an image to begin with</li>
        <li>Score: {props.score} | Top Score: {props.highScore}</li>
    </ul>
    </nav>
}
export default Nav;