import { useState } from "react";

import quizQuestions from "../data/quizQuestions";
import FinalScreen from "./FinalScreen";

const QuizScreens = ({ props = quizQuestions, resetQuiz }) => {
  console.log(props);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setUserAnswers([
      ...userAnswers,
      {
        question: quizQuestions[questionIndex].text,
        answer: answer.text,
        isCorrect: answer.isCorrect,
      },
    ]);

    if (answer.isCorrect) {
      setScore(score + 1);
    }
    if (questionIndex < props.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else setIsFinished(true);
  };

  const handleReset = () => {
    setQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    setUserAnswers([]);
    resetQuiz();
  };

  return (
    <>
      {!isFinished ? (
        <div id="question-page">
          <p>
            Pytanie {questionIndex + 1}: {props[questionIndex].text}
          </p>
          <button
            className="answer-btn"
            onClick={() => {
              handleAnswer(props[questionIndex].answers[0]);
            }}
          >
            {props[questionIndex].answers[0].text}
          </button>
          <button
            className="answer-btn"
            onClick={() => {
              handleAnswer(props[questionIndex].answers[1]);
            }}
          >
            {props[questionIndex].answers[1].text}
          </button>
          <button
            className="answer-btn"
            onClick={() => {
              handleAnswer(props[questionIndex].answers[2]);
            }}
          >
            {props[questionIndex].answers[2].text}
          </button>
          <button
            className="answer-btn"
            onClick={() => {
              handleAnswer(props[questionIndex].answers[3]);
            }}
          >
            {props[questionIndex].answers[3].text}
          </button>
        </div>
      ) : (
        <FinalScreen
          result={
            score >= 8 ? (
              <h2 style={{ color: "var(--green)" }}>
                Gratulacje, quiz zaliczony
              </h2>
            ) : (
              <h2 style={{ color: "var(--red)" }}>
                Niestety, quiz niezaliczony
              </h2>
            )
          }
          score={
            <p>
              Twój wynik to:{" "}
              <span
                style={{ color: score >= 8 ? "var(--green)" : "var(--red)" }}
              >
                {((score / 10) * 100).toFixed(2)}%
              </span>{" "}
              ({score} z {props.length} poprawnych odpowiedzi)
            </p>
          }
          resetQuiz={handleReset}
        >
          {userAnswers.map((element, index) => (
            <li key={index}>
              <strong style={{ color: "var(--blue)" }}>
                Pytanie {index + 1}: {element.question}
              </strong>
              <strong>
                Twoja odpowiedź:{" "}
                <span
                  style={{
                    color: element.isCorrect ? "var(--green)" : "var(--red)",
                  }}
                >
                  {element.answer}
                </span>
              </strong>
            </li>
          ))}
        </FinalScreen>
      )}
    </>
  );
};

export default QuizScreens;
