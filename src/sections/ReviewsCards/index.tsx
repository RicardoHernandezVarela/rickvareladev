import { Flex, Text } from "@chakra-ui/react";

import ReviewCard from "@/src/sections/ReviewsCards/ReviewCard";

import LoadingSpinner from "@/src/components/Layout/LoadingSpinner";
import SelectedReview from "./SelectedReview";

import useReviewsCards from "@/src/sections/ReviewsCards/useReviewsCards";

import requestStatus from "@/src/constants/requestStatus";
import scrollBarStyles from "@/src/constants/scrollBarStyles";

const styles = {
  mainContainer: {
    w: { base: "87vw", lg: "72vw", xl: "76.5vw" },
    maxW: "1650px",
    h: "auto",
    alignItems: "center",
    justifyContent: "center",
    mt: "8px",
    mb: "16px",
    p: "24px",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "md",
    gap: "20px",
  },
  cardsContainer: {
    h: { sm: "80vh", md: "450px" },
    gap: "16px",
    pb: "10px",
  },
};

function ReviewsCards(props: { status: string; data: Record<string, any>[] }) {
  const { status, data } = props;

  const { selectedCard, setSelectedCard } = useReviewsCards({
    dafaultSelectedCard: data[0],
  });

  return (
    <Flex
      {...styles.mainContainer}
      direction={{ sm: "column-reverse", lg: "row" }}
    >
      <LoadingSpinner status={status} />

      {status === requestStatus.HAS_SUCCESS && (
        <>
          <SelectedReview
            selectedCard={selectedCard?.image ? selectedCard : data[0]}
          />

          <Flex
            {...styles.cardsContainer}
            css={scrollBarStyles}
            direction="column"
            overflowX="hidden"
            overflowY="scroll"
          >
            {data?.map((item: Record<string, any>, index: number) => {
              return (
                <ReviewCard
                  key={index}
                  data={item}
                  setSelectedCard={() => setSelectedCard(item)}
                />
              );
            })}
          </Flex>
        </>
      )}

      {status === requestStatus.HAS_ERROR && <Text>There is no data.</Text>}
    </Flex>
  );
}

export default ReviewsCards;
