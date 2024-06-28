import { useEffect, useState } from "react";

const titleOptions = ["Prev Review", "Latest Review", "Next Review"];

function useReviews() {
  const [cardState, setCardState] = useState({
    index: 1,
    title: titleOptions[1],
    isOpen: true,
  });

  const [toTheRight, setToTheRight] = useState(false);

  const handleCardChange = (params: { next: boolean }) => {
    const { next } = params;

    setToTheRight(next);

    setCardState({ ...cardState, isOpen: false });

    const currentIndex = cardState.index;

    const newIndex = currentIndex + (next ? 1 : -1);

    const realNewIndex = Math.min(Math.max(0, newIndex), 2);

    setTimeout(() => {
      setCardState({
        index: realNewIndex,
        title: titleOptions[realNewIndex],
        isOpen: true,
      });
    }, 500);
  };

  return { cardState, toTheRight, handleCardChange };
}

export default useReviews;
