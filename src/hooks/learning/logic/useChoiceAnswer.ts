import { useState } from "react";

export const useChoiceAnswer = (
  correctIndex: number,
  onNext: (isCorrect: boolean) => void
) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [disabled, setDisabled] = useState(false);

  const handleChoice = (index: number) => {
    if (disabled) return;

    setSelectedIndex(index);
    setDisabled(true);

    if (index === correctIndex) {
      setTimeout(() => {
        setSelectedIndex(null);
        setDisabled(false);
        onNext(true);
      }, 700)
    } else {
      setTimeout(() => {
        setSelectedIndex(null);
        setDisabled(false);
      }, 700)
    }
  };

  return { 
    selectedIndex, 
    disabled,
    handleChoice,
  };
};
