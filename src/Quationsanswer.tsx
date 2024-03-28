import React, { useState } from "react";
import { QUESTIONS } from "./Quations";

const Quationsanswer: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const questionsCount = Object.keys(QUESTIONS).length;
  const [score, SetScore] = useState("");

  const handleAnswer = (answer: boolean) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    const yesCount = answers.filter((answer) => answer).length;
    return (yesCount / questionsCount) * 100;
  };

  const handleNextQuestion = () => {
    if (!isNaN(calculateScore())) {
      if (currentQuestion < questionsCount) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const score = calculateScore();
        SetScore(`Your score: ${score.toFixed(2)}%`);
        restartQuiz();
      }
    }
  };
  const restartQuiz = () => {
    setCurrentQuestion(1);
    setAnswers([]);
  };

  return (
    <div className="container">
      <p className="question">{QUESTIONS[currentQuestion]}</p>
      <div className="button-container">
        <button
          className="button yes-button"
          onClick={() => handleAnswer(true)}
        >
          Yes
        </button>
        <button
          className="button no-button"
          onClick={() => handleAnswer(false)}
        >
          No
        </button>
        <button className="button next-button" onClick={handleNextQuestion}>
          Next Question
        </button>
      </div>
      <p className="score">Score: {score}</p>
    </div>
  );
};

export default Quationsanswer;
