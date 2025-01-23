export default function Question({
  onClick,
  question,
  currentQuestion,
  totalQuestions,
}) {
  return (
    <div>
      <div className="mb-4 text-sm text-gray-600">
        Question {question.id} of {totalQuestions}
      </div>
      <h2 className="text-xl mb-4">{question.question}</h2>

      <div className="space-y-2 select-none">
        {question.options.map((option, i) => (
          <button
            key={i + 1}
            className="w-full p-3 text-left border rounded hover:bg-gray-50 hover:text-black transition-colors"
            onClick={(e) => onClick(i + 1)}
          >
            {`${i + 1}) `} {option}
          </button>
        ))}
      </div>
    </div>
  );
}
