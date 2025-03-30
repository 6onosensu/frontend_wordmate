import { useState } from "react";
import { FormattedWord } from "@/types/wordType";

const useListenAndType = (
  word: FormattedWord,
  onNext: (isCorrect: boolean) => void
) => {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (feedback) setFeedback(null);
  };

  const handleSubmit = () => {
    const userAnswer = input.trim().toLowerCase();
    const correctAnswer = word.word.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      setFeedback("correct");
      setTimeout(() => {
        setInput("");
        setFeedback(null);
        onNext(true);
      }, 2000);
    } else {
      setFeedback("incorrect");
    }
  };

  return {
    input,
    feedback,
    handleInputChange,
    handleSubmit
  };
};

export default useListenAndType;