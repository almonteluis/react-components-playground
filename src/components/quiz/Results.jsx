export default function Results({ score, totalQuestions, onRestart }) {
  const precentage = Math.round((score / totalQuestions) * 100);
  console.log(precentage);
  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4">Quiz Completed!</h1>
      <p className="text-xl mb-4">
        You scored {score} out of ({totalQuestions}) ({precentage}%)
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onRestart}
      >
        Try again
      </button>
    </div>
  );
}
