import { Flex, Spinner, Text } from "@chakra-ui/react";

import VinylCard from "@/src/components/VinylCollection/VinylCard";

import useSanityData from "@/src/hooks/useSanityData";

import requestStatus from "@/src/constants/requestStatus";

const styles = {
  mainContainer: {
    w: "100%",
    maxW: "1650px",
    h: "100vh",
    justifyContent: "center",
    gap: "25px",
    p: "20px 40px 40px 40px",
  },
  blankCard: {
    w: { base: "87vw", md: "305px", lg: "305px", xl: "21.17vw" },
    maxW: "305px",
  },
};

function VinylCollection() {
  const { data, status } = useSanityData({ dataItem: "vinyl" });

  return (
    <Flex {...styles.mainContainer} overflowY="scroll" flexWrap="wrap">
      {(status === requestStatus.IDLE ||
        status === requestStatus.IS_LOADING) && (
        <Spinner size="xl" color="bleu" thickness="4px" speed="0.65s" />
      )}

      {status === requestStatus.HAS_SUCCESS && data?.length && (
        <>
          {data?.map((vinyl: Record<string, any>, index: number) => {
            return (
              <VinylCard
                key={index}
                loading={false}
                img={vinyl?.image?.url}
                recordName={vinyl?.name}
                artistName={vinyl?.artist}
                year={vinyl?.year}
                preview_url={vinyl?.preview_url}
                _rev={vinyl?._rev}
              />
            );
          })}

          <Flex {...styles.blankCard} />
          <Flex {...styles.blankCard} />
        </>
      )}

      {status === requestStatus.HAS_ERROR && (
        <Text>There are no items in my collection.</Text>
      )}
    </Flex>
  );
}

export default VinylCollection;
