import { useState } from "react";
import { Button } from "../Button";
import { questionStash } from "../stash";
import { Result } from "../Result/Result";

export function Question() {
  const [answer, setAnswer] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(1);

  const handleButtonClick = (value) => {
    setAnswer([...answer, value]);
    setQuestionIndex((prevIndex) => prevIndex + 1);
    console.log(choosenQeustion);
  };

  const choosenQeustion = questionStash.map((question) => {
    if (question.id === questionIndex) {
      return (
        <div key={question.id} className="flex flex-col items-start">
          <p className="mb-4 text-left">Pytanie {question.id} z 5</p>
          <p className="mb-4 text-left text-2xl">{question.question}</p>
          <Button
            onClick={() => handleButtonClick(question.answerOne)}
            answer={question.answerOne}
          ></Button>
          <Button
            onClick={() => handleButtonClick(question.answerTwo)}
            answer={question.answerTwo}
          ></Button>
          <Button
            onClick={() => handleButtonClick(question.answerThree)}
            answer={question.answerThree}
          ></Button>
          <Button
            onClick={() => handleButtonClick(question.answerFour)}
            answer={question.answerFour}
          ></Button>
        </div>
      );
    }
  });
  return (
    <div className="w-full border border-white p-4">
      {questionIndex > questionStash.length ? (
        <Result choosenAnswer={answer.map((el) => el)} />
      ) : (
        choosenQeustion
      )}
    </div>
  );
}
