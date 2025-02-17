import { Flex } from "@chakra-ui/react";

import BlockCard from "@/src/components/Layout/BlockCard";

const styles = {
  mainContainer: {
    w: { base: "87vw", lg: "72vw", xl: "76.5vw" },
    maxW: "1650px",
    h: "auto",
    mt: "8px",
    mb: "16px",
    p: "24px",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "md",
    gap: "20px"
  },
  selectedCardContainer: {
    w: "400px",
    borderRadius: "md",
    border: "1px",
  },
};

function BlockCards() {
  return (
    <Flex {...styles.mainContainer}>
      <Flex {...styles.selectedCardContainer}></Flex>

      <Flex direction="column">
        <BlockCard />

        <BlockCard />

        <BlockCard />
      </Flex>
    </Flex>
  );
}

export default BlockCards;
