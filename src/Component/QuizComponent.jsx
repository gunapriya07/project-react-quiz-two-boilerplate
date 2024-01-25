import React from "react";
import quizQuestions from "../resources/quizQuestion.json";
import "./QuizComponent.css";

class QuizComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 0,
    };
  }

  handlenext = () => {
    this.setState((prevState) => ({ 
        currentQuestion: prevState.currentQuestion + 1 
    }));
  };

  handleprev = () => {
    this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion - 1
     }));
  };

  handleQuit = () => {
    
    let userConfirmed = window.confirm("Are you sure you want to quit?");

    if (userConfirmed && this.onQuit) {
      this.onQuit();
    }
  };

  render() {
    const { currentQuestion } = this.state;
    const currentQuizQuestion = quizQuestions[currentQuestion];

    return (
      <>
        <div className="main">
          <h1 className="Question">Question</h1>
          <p className="no">{`${currentQuestion + 1} of ${quizQuestions.length}`}</p>
          <h3 className="para1">{currentQuizQuestion.question}</h3>

          <div className="options">
            <button>{currentQuizQuestion.optionA}</button>
            <button>{currentQuizQuestion.optionB}</button>
          </div>

          <div className="options">
            <button>{currentQuizQuestion.optionC}</button>
            <button>{currentQuizQuestion.optionD}</button>
          </div>

          <div className="footer">
            <button
              style={{ backgroundColor: 'rgb(17, 160, 216)' }}
              onClick={this.handleprev}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: 'green' }}
              onClick={this.handlenext}
              disabled={currentQuestion === quizQuestions.length - 1}
            >
              Next
            </button>
            <button style={{ backgroundColor: 'red' }} onClick={this.handleQuit}>
              Quit
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default QuizComponent;

