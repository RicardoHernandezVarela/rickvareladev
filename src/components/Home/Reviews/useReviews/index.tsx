import { useEffect, useState } from "react";

import useSanityData from "@/src/hooks/useSanityData";

const titleOptions = ["Prev Review", "Latest Review", "Next Review"];

const reviewsList: any = [
  {
    img: "https://upload.wikimedia.org/wikipedia/en/2/2c/Stevemcqueen.jpg",
    recordName: "Steve McQueen",
    artistName: "Prefab Sprout",
  },
  {
    img: "https://i.ytimg.com/vi/K8IXWzKcJEQ/hqdefault.jpg",
    recordName: "Magnolia Electric Co.",
    artistName: "Songs:Ohia",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/e/eb/Nocturne_%28Wild_Nothing_album_-_cover_art%29.jpg",
    recordName: "Nocturne",
    artistName: "Wild Nothing",
  },
];

function useReviews() {
  const { data, status } = useSanityData({ dataItem: "vinyl" });

  const [cardState, setCardState] = useState({
    index: 1,
    title: titleOptions[1],
    isOpen: true,
  });

  const [toTheRight, setToTheRight] = useState(false);

  const [selectedReview, setSelectedReview] = useState(data[1]);

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

  return { cardState, toTheRight, handleCardChange, selectedReview };
}

export default useReviews;
