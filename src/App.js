import "./styles.css";
import { QuizApp } from "./components/Quiz";
import { useState } from "react";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartClick = () => {
    setShowQuiz(true);
  };

  return (
    <div className="App">
      <h1 className="quiz-title">React Quiz</h1>
      {!showQuiz ? (
        <div className="intro">
          <h4>Solve this quick quiz and test your knowledge about react</h4>
          <button onClick={handleStartClick} className="start-button">
            <b>Start</b>
          </button>
        </div>
      ) : (
        <QuizApp />
      )}
    </div>
  );
}
