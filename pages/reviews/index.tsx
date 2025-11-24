import { Flex, Text } from "@chakra-ui/react";

import ReviewsCards from "@/src/sections/ReviewsCards";

import useSanityData from "@/src/hooks/useSanityData";

const styles = {
  mainContainer: {
    w: "100%",
    maxW: "1650px",
    h: "100vh",
    alignItems: "center",
  },
};

function ReviewsPage() {
  const { data, status } = useSanityData({ dataItem: "vinyl" });

  return (
    <Flex {...styles.mainContainer} direction="column" overflowY="scroll">
      <ReviewsCards status={status} data={data} />
    </Flex>
  );
}

export default ReviewsPage;
