import { Flex, Text } from "@chakra-ui/react";

import BlockCard from "@/src/components/Layout/BlockCard";

import LoadingSpinner from "@/src/components/Layout/LoadingSpinner";

import requestStatus from "@/src/constants/requestStatus";

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
  selectedCardContainer: {
    w: "450px",
    minH: "450px",
    borderRadius: "24px",
    border: "1px",
  },
  cardsContainer: {
    h: "450px",
    gap: "16px",
    overflow: "hidden",
  },
};

function BlockCards(props: { status: string; data: Record<string, any>[] }) {
  const { status, data } = props;

  return (
    <Flex {...styles.mainContainer}>
      <LoadingSpinner status={status} />

      {status === requestStatus.HAS_SUCCESS && (
        <>
          <Flex {...styles.selectedCardContainer}></Flex>

          <Flex {...styles.cardsContainer} direction="column">
            {data?.map((item: Record<string, any>, index: number) => {
              return <BlockCard key={index} data={item} />;
            })}
          </Flex>
        </>
      )}

      {status === requestStatus.HAS_ERROR && <Text>There is no data.</Text>}
    </Flex>
  );
}

export default BlockCards;
