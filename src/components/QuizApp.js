import React, { useState, useEffect, useCallback } from 'react';
import './styles/QuizApp.css';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  const questions = [
    {
      questionText: 'What is React?',
      options: [
        { id: 'A', text: 'A JavaScript library for building user interfaces' },
        { id: 'B', text: 'A programming language' },
        { id: 'C', text: 'A database management system' },
        { id: 'D', text: 'An operating system' }
      ],
      correctAnswer: 'A'
    },
    {
      questionText: 'What hook is used for state in React?',
      options: [
        { id: 'A', text: 'useEffect' },
        { id: 'B', text: 'useState' },
        { id: 'C', text: 'useContext' },
        { id: 'D', text: 'useReducer' }
      ],
      correctAnswer: 'B'
    },
    {
      questionText: 'What is JSX?',
      options: [
        { id: 'A', text: 'JavaScript XML' },
        { id: 'B', text: 'Java Syntax Extension' },
        { id: 'C', text: 'JavaScript Extension' },
        { id: 'D', text: 'Java XML' }
      ],
      correctAnswer: 'A'
    },
    {
      questionText: 'Which method is used to render React elements?',
      options: [
        { id: 'A', text: 'createElement()' },
        { id: 'B', text: 'renderComponent()' },
        { id: 'C', text: 'render()' },
        { id: 'D', text: 'display()' }
      ],
      correctAnswer: 'C'
    },
    {
      questionText: 'What is the virtual DOM?',
      options: [
        { id: 'A', text: 'A copy of the real DOM' },
        { id: 'B', text: 'A lightweight representation of the real DOM' },
        { id: 'C', text: 'A new type of DOM' },
        { id: 'D', text: 'None of the above' }
      ],
      correctAnswer: 'B'
    },
    {
      questionText: 'Which hook is used to perform side effects in React?',
      options: [
        { id: 'A', text: 'useState' },
        { id: 'B', text: 'useEffect' },
        { id: 'C', text: 'useContext' },
        { id: 'D', text: 'useReducer' }
      ],
      correctAnswer: 'B'
    },
    {
      questionText: 'What is the purpose of keys in React?',
      options: [
        { id: 'A', text: 'To uniquely identify elements' },
        { id: 'B', text: 'To improve performance' },
        { id: 'C', text: 'To trigger re-renders' },
        { id: 'D', text: 'All of the above' }
      ],
      correctAnswer: 'A'
    },
    {
      questionText: 'What is the use of useContext hook?',
      options: [
        { id: 'A', text: 'To manage state' },
        { id: 'B', text: 'To access context values' },
        { id: 'C', text: 'To perform side effects' },
        { id: 'D', text: 'To memoize values' }
      ],
      correctAnswer: 'B'
    },
    {
      questionText: 'What is the use of useReducer hook?',
      options: [
        { id: 'A', text: 'To manage complex state logic' },
        { id: 'B', text: 'To perform side effects' },
        { id: 'C', text: 'To access context values' },
        { id: 'D', text: 'To memoize values' }
      ],
      correctAnswer: 'A'
    },
    {
      questionText: 'What is the use of useMemo hook?',
      options: [
        { id: 'A', text: 'To manage state' },
        { id: 'B', text: 'To perform side effects' },
        { id: 'C', text: 'To memoize expensive calculations' },
        { id: 'D', text: 'To access context values' }
      ],
      correctAnswer: 'C'
    }
  ];

  const handleTimeUp = useCallback(() => {
    setIsAnswerChecked(true);
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsAnswerChecked(false);
        setTimeLeft(15);
      } else {
        setShowScore(true);
      }
    }, 1000);
  }, [currentQuestion, questions.length]);

  useEffect(() => {
    let timer;
    if (!showScore && !isAnswerChecked && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isAnswerChecked) {
      handleTimeUp();
    }
    return () => clearInterval(timer);
  }, [timeLeft, showScore, isAnswerChecked, handleTimeUp]);

  const handleAnswerClick = (selectedOption) => {
    if (!isAnswerChecked) {
      setSelectedAnswer(selectedOption);
      setIsAnswerChecked(true);

      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
          setSelectedAnswer(null);
          setIsAnswerChecked(false);
          setTimeLeft(15);
        } else {
          setShowScore(true);
        }
      }, 1000);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setTimeLeft(15);
  };

  const getButtonClass = (optionId) => {
    if (!isAnswerChecked) return 'answer-button';
    
    if (optionId === questions[currentQuestion].correctAnswer) {
      return 'answer-button correct';
    }
    
    if (optionId === selectedAnswer && selectedAnswer !== questions[currentQuestion].correctAnswer) {
      return 'answer-button incorrect';
    }
    
    return 'answer-button';
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            <h2>Quiz Completed!</h2>
            <p>Your score: {score} out of {questions.length}</p>
            <button className="restart-button" onClick={handleRestart}>
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="timer-container">
              <div className="timer">
                Time Left: {timeLeft}s
              </div>
              <div className="timer-bar">
                <div 
                  className="timer-progress" 
                  style={{ width: `${(timeLeft / 15) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="question-section">
              <div className="question-count">
                <span>{currentQuestion + 1}</span>
                <span className="total-questions">/{questions.length}</span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.id}
                  className={getButtonClass(option.id)}
                  onClick={() => handleAnswerClick(option.id)}
                  disabled={isAnswerChecked}
                >
                  <span className="option-id">{option.id}</span>
                  <span className="option-text">{option.text}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizApp;