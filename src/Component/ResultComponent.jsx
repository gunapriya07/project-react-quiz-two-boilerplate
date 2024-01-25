import React from "react";
import "./ResultComponent.css";

export default class ResultComponent extends React.Component{
    constructor(){
        super();
    
}
render(){
    return(
        <>
        <div>
          <h1 className="heading">Result</h1>
        </div>
        <div className="mainbox">
            <h4 className="words">You need more practice!</h4>
            <h1 className="title">Your score is 20%</h1>
            <p className="p">Total number of Question<span>15</span></p>
            <p className="p">Number of attempted questions<span>9</span></p>
            <p className="p">Number is current answers<span>3</span></p>
            <p className="p">Number if wrong answers<span>6</span></p>
        </div>
        <div className="foot">
        <div style={{ backgroundColor: 'rgb(197, 223, 234)' ,border:"3px solid skyblue" }}>Play Again</div>
        <div style={{ backgroundColor: 'rgb(217, 246, 217',border:"3px solid green" }}>Back to home</div>
        </div>
        </>
    )
}
}