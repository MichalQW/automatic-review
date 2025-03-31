const FinalScreen = ({ result, score, children, resetQuiz }) => {
  return (
    <>
      <div id="final-screen">
        {result}
        {score}
        <ul id="answers-list" style={{ listStyleType: "none" }}>
          {children}
        </ul>
      </div>
      <button id="reset-btn" onClick={resetQuiz}>
        Powrót do startu
      </button>
    </>
  );
};

export default FinalScreen;
