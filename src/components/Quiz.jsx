import React, { useState, useEffect } from "react";
import { quizDetailes } from "../quizDetailes";
import "./Quiz.css";
import { Timer } from "phosphor-react";

export const QuizApp = () => {
  const [showedQuestion, setShowedQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [getScore, setGetScore] = useState(false);
  const [detailedResult, setDetailedResult] = useState({
    score: 0,
    correctAnswer: 0,
    WrongAnswers: 0,
  });
  const [timer, setTimer] = useState(300);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [hoveredAnswer, setHoveredAnswer] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredAnswer(index);
  };

  const handleMouseLeave = () => {
    setHoveredAnswer(null);
  };

  const handleClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const { questions } = quizDetailes;
  const totalQuestionNumber = quizDetailes.totalQuestionNumber;

  const { question, correctAnswer, answers, questionNumber } =
    questions[showedQuestion];

  useEffect(() => {
    let interval;

    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      handleQuizSubmission();
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimerRunning, timer]);

  const handleQuizSubmission = () => {
    setGetScore(true);
    setIsTimerRunning(false);
  };

  const nextQuestion = () => {
    setDetailedResult((prev) =>
      selectedAnswer === correctAnswer
        ? {
            ...prev,
            score: prev.score + 2,
            correctAnswer: prev.correctAnswer + 1,
          }
        : { ...prev, WrongAnswers: prev.WrongAnswers + 1 },
    );
    if (showedQuestion !== questions.length - 1) {
      setShowedQuestion((prev) => prev + 1);
      setSelectedAnswer("");
    } else {
      handleQuizSubmission();
    }
    setTimer(300);
  };

  const selectingAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="all">
      <div className="sub-all">
        {!getScore ? (
          <div className="questions">
            <div>
              <h3 className="question-number">
                {questionNumber} / {totalQuestionNumber}
              </h3>
              <p className="timer">
                {" "}
                <Timer size={32} /> {formatTime(timer)}{" "}
              </p>
            </div>
            <h4 className="each-question">{question}</h4>
            <div>
  {answers.map((answer, index) => (
    <div
      key={index}
      onClick={() => handleClick(answer)}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      className={`answers ${index === hoveredAnswer ? "hovered" : ""} ${
        answer === selectedAnswer ? "selected" : ""
      }`}
    >
      {answer}
    </div>
  ))}
</div>

            <button onClick={nextQuestion} className="next-submit">
              <b>
                {showedQuestion === questions.length - 1 ? "Submit" : "Next"}
              </b>
            </button>
          </div>
        ) : (
          <div className="result">
            <h1>Your test results</h1>
            <div>
              <ul className="result-detailes">
                <li>
                  <b>The total number of questions: </b>
                  {totalQuestionNumber}
                </li>
                <li>
                  <b>Your score is: </b>
                  {detailedResult.score}
                </li>
                <li>
                  <b>
                    {" "}
                    <span className="correct">The correct answers:</span>
                  </b>{" "}
                  {detailedResult.correctAnswer}
                </li>
                <li>
                  <span className="wrong">
                    <b>The wrong answers: </b>
                  </span>
                  {detailedResult.WrongAnswers}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
