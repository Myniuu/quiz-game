import { questionStash } from "../stash";

export function Result({ choosenAnswer }) {
  return (
    <div className="flex flex-col items-start text-white">
      <h2>Podsumowanie</h2>
      {questionStash.map((question, index) => (
        <div key={index}>
          <p>
            Pytanie {index + 1}: {question.question}
          </p>
          <p>Twoja odpowiedź: {choosenAnswer[index]}</p>
          <p>Poprawna odpowiedź: {question.correctAnswer}</p>
        </div>
      ))}
    </div>
  );
}
