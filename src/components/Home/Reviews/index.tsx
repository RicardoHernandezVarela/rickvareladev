import NextLink from "next/link";
import {
  Flex,
  Text,
  Image,
  Link,
  Button,
  SlideFade,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import useReviews from "./useReviews";

import routes from "@/src/constants/routes";
import requestStatus from "@/src/constants/requestStatus";

const styles = {
  reviewsContainer: {
    w: { base: "87vw", md: "305px", lg: "305px", xl: "21.17vw" },
    maxW: "305px",
    h: "441px",
    alignItems: "center",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "md",
    p: "20px",
  },
  titleContainer: {
    w: "250px",
    justifyContent: "space-between",
    alignItems: "center",
    mb: "15px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "25px",
    letterSpacing: "1px",
    color: "delftBlue",
    px: "10px",
  },
  arrowIcon: { width: "18px", height: "18px", color: "#2B357D" },
  image: {
    w: "250px",
    h: "250px",
    borderRadius: "8px",
  },
  reviewDetails: {
    alignItems: "center",
    my: "15px",
    gap: "8px",
  },
  recordName: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "27px",
    letterSpacing: "0.5px",
    color: "eerieBlack",
    _hover: {
      textDecoration: "none",
      opacity: "0.8",
    },
  },
  artistName: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "mainMenuOption",
  },
  seeAll: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "mainMenuOption",
    mt: "3px",
    _hover: {
      textDecoration: "none",
      opacity: "0.8",
    },
  },
};

function Reviews() {
  const {
    cardState,
    toTheRight,
    handleCardChange,
    selectedReview,
    data,
    status,
  } = useReviews();

  return (
    <Flex {...styles.reviewsContainer} direction="column" position="relative">
      {(status === requestStatus.IDLE ||
        status === requestStatus.IS_LOADING) && (
        <Spinner size="xl" color="bleu" thickness="4px" speed="0.65s" />
      )}

      {status === requestStatus.HAS_SUCCESS && data?.length && (
        <>
          <Flex {...styles.titleContainer}>
            <Button
              bg="magnolia"
              onClick={() => handleCardChange({ next: false })}
              isDisabled={cardState.index === 0}
            >
              <IoIosArrowBack style={styles.arrowIcon} />
            </Button>

            <Text {...styles.title}>{cardState.title}</Text>

            <Button
              bg="magnolia"
              onClick={() => handleCardChange({ next: true })}
              isDisabled={cardState.index === 2}
            >
              <IoIosArrowForward style={styles.arrowIcon} />
            </Button>
          </Flex>

          <SlideFade
            in={cardState.isOpen}
            offsetX={toTheRight ? "20px" : "-20px"}
            offsetY="0px"
            transition={{ enter: { duration: 0.6 }, exit: { duration: 0.4 } }}
          >
            <Flex direction="column">
              <Flex {...styles.image} overflow="hidden">
                {!cardState.isOpen && (
                  <Skeleton {...styles.image} bg="magnolia" />
                )}

                {cardState.isOpen && (
                  <Image
                    w="250px"
                    h="250px"
                    objectFit="cover"
                    src={selectedReview?.image?.url}
                    alt="review img"
                  />
                )}
              </Flex>

              <Flex {...styles.reviewDetails} direction="column">
                <Link {...styles.recordName} as={NextLink} href={"/"}>
                  <Text>{selectedReview?.name}</Text>
                </Link>
                <Text {...styles.artistName}>{selectedReview?.artist}</Text>
              </Flex>
            </Flex>
          </SlideFade>

          <Link {...styles.seeAll} as={NextLink} href={routes.HOME}>
            <Text>{"All Reviews"}</Text>
          </Link>
        </>
      )}

      {status === requestStatus.HAS_ERROR && <Text>There are no reviews.</Text>}
    </Flex>
  );
}

export default Reviews;
