import { useEffect, useState } from "react";

function useBlockCards(props: { dafaultSelectedCard?: Record<string, any> }) {
  const { dafaultSelectedCard } = props;

  const [selectedCard, setSelectedCard] = useState<Record<string, any>>(
    dafaultSelectedCard || {}
  );

  return {
    selectedCard,
    setSelectedCard,
  };
}

export default useBlockCards;
