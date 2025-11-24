import { useEffect, useState } from "react";

function useReviewsCards(props: { dafaultSelectedCard?: Record<string, any> }) {
  const { dafaultSelectedCard } = props;

  const [selectedCard, setSelectedCard] = useState<Record<string, any>>(
    dafaultSelectedCard || {}
  );

  return {
    selectedCard,
    setSelectedCard,
  };
}

export default useReviewsCards;
