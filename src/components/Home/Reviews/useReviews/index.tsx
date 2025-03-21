import { useEffect, useState } from "react";

import useSanityData from "@/src/hooks/useSanityData";

const titleOptions = ["Prev Review", "Latest Review", "Next Review"];

function useReviews() {
  const { data, status } = useSanityData({ dataItem: "vinyl" });

  const [cardState, setCardState] = useState({
    index: 1,
    title: titleOptions[1],
    isOpen: true,
  });

  const [toTheRight, setToTheRight] = useState(false);

  const [selectedReview, setSelectedReview] = useState(
    data?.length ? data[1] : {}
  );

  useEffect(() => {
    setSelectedReview(data?.length ? data[1] : {});
  }, [data]);

  const handleCardChange = (params: { next: boolean }) => {
    const { next } = params;

    setToTheRight(next);

    setCardState({ ...cardState, isOpen: false });

    const currentIndex = cardState.index;

    const newIndex = currentIndex + (next ? 1 : -1);

    const realNewIndex = Math.min(Math.max(0, newIndex), 2);

    setTimeout(() => {
      setSelectedReview(data[realNewIndex]);

      setCardState({
        index: realNewIndex,
        title: titleOptions[realNewIndex],
        isOpen: true,
      });
    }, 510);
  };

  return {
    cardState,
    toTheRight,
    handleCardChange,
    selectedReview,
    data,
    status,
  };
}

export default useReviews;
