const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to The English Quiz App</h2>
      <h3>{numQuestions} Questions to Know Your English Grammar Skill</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
};
export default StartScreen;
