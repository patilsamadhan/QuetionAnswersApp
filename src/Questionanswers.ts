import React, { useState } from "react";
import { QUESTIONS } from "./questions";

const Questionanswers: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [averageScore, setAverageScore] = useState<number | null>(null);

  const handleAnswer = (answer: boolean) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    const yesCount = updatedAnswers.filter((a) => a).length;
    const newScore = (yesCount / updatedAnswers.length) * 100;
    setScore(newScore.toFixed(2));
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion <= Object.keys(QUESTIONS).length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const totalScore = answers.reduce(
        (acc, answer) => acc + (answer ? 1 : 0),
        0
      );
      const average = (totalScore / answers.length) * 100;
      setAverageScore(average.toFixed(2));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(1);
    setAnswers([]);
    setScore(null);
    setAverageScore(null);
  };

  return (
    <div>
      {score !== null ? (
        <div>
          <p>
            Score for Question {currentQuestion}: {score}%
          </p>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      ) : (
        <div>
          <p>{QUESTIONS[currentQuestion]}</p>
          <button onClick={() => handleAnswer(true)}>Yes</button>
          <button onClick={() => handleAnswer(false)}>No</button>
        </div>
      )}
      {averageScore !== null && (
        <div>
          <p>Average Score: {averageScore}%</p>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Questionanswers;
