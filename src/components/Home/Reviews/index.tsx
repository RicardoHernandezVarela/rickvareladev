import NextLink from "next/link";
import {
  Flex,
  Text,
  Image,
  Link,
  Button,
  SlideFade,
  Skeleton,
} from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import useReviews from "./useReviews";

const styles = {
  reviewsContainer: {
    w: "21.17vw",
    h: "441px",
    alignItems: "center",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "sm",
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
  const { cardState, toTheRight, handleCardChange, selectedReview } =
    useReviews();

  return (
    <Flex {...styles.reviewsContainer} direction="column" position="relative">
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
            {!cardState.isOpen && <Skeleton {...styles.image} bg="magnolia" />}

            {cardState.isOpen && (
              <Image
                w="250px"
                h="250px"
                objectFit="cover"
                src={selectedReview.img}
                alt="review img"
              />
            )}
          </Flex>

          <Flex {...styles.reviewDetails} direction="column">
            <Link {...styles.recordName} as={NextLink} href={"/"}>
              <Text>{selectedReview.recordName}</Text>
            </Link>
            <Text {...styles.artistName}>{selectedReview.artistName}</Text>
          </Flex>
        </Flex>
      </SlideFade>

      <Link {...styles.seeAll} as={NextLink} href={"/"}>
        <Text>{"All Reviews"}</Text>
      </Link>
    </Flex>
  );
}

export default Reviews;
