"use client";
import { useState } from "react";
import Question from "@/components/quiz/Question";
import Results from "@/components/quiz/Results";
import { quizQuestions } from "@/api/getQuestions";
export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption) => {
    const correct =
      selectedOption === quizQuestions[currentQuestion].correctAnswer;

    if (correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto select-none">
      <h1 className="text-3xl font-bold mb-8 text-center">
        React Fundamentals Quiz
      </h1>

      {!showResults ? (
        <Question
          question={quizQuestions[currentQuestion]}
          onClick={handleAnswer}
          currentQuestion={currentQuestion + 1}
          totalQuestions={quizQuestions.length}
        />
      ) : (
        <Results
          score={score}
          totalQuestions={quizQuestions.length}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}
