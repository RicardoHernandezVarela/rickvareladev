import { useState } from "react";

function useBlockCards(props: { dafaultSelectedCard?: Record<string, any> }) {
  const { dafaultSelectedCard } = props;

  const [selectedCard, setSelectedCar] = useState<Record<string, any>>(
    dafaultSelectedCard || {}
  );

  return {
    selectedCard,
    setSelectedCar,
  };
}

export default useBlockCards;
