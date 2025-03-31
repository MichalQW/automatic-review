import { useState } from "react";
import "./App.css";

import StartScreen from "./Components/StartScreen";
import QuizScreens from "./Components/QuizScreens";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => setQuizStarted(true);

  const resetQuiz = () => setQuizStarted(false);

  return (
    <>
      {quizStarted === false ? (
        <StartScreen>
          <button className="btn" onClick={startQuiz}>
            Rozpocznij quiz
          </button>
        </StartScreen>
      ) : (
        <QuizScreens resetQuiz={resetQuiz} />
      )}
    </>
  );
}

export default App;
