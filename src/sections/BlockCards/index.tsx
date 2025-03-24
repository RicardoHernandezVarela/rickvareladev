import { Flex, Text } from "@chakra-ui/react";

import BlockCard from "@/src/components/Layout/BlockCard";

import LoadingSpinner from "@/src/components/Layout/LoadingSpinner";
import SelectedCard from "./SelectedCar";

import useBlockCards from "@/src/sections/BlockCards/useBlockCards";

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

function BlockCards(props: { status: string; data: Record<string, any>[] }) {
  const { status, data } = props;

  const { selectedCard, setSelectedCard } = useBlockCards({
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
          <SelectedCard
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
                <BlockCard
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

export default BlockCards;
