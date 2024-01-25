import React from "react";
import "./HomeComponent.css";
// import "./QuizComponent";


export default class HomeComponent extends React.Component{
    constructor(){
        super();
    
}
render(){
    return(
        <>
        <div className="container">
            <h2>Quiz App</h2>
            <button  className="play">Play</button>
        </div>
        </>
    )
}
}