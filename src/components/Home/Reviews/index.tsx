import NextLink from "next/link";
import { Flex, Text, Image, Link } from "@chakra-ui/react";

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
    justifyContent: "center",
    alignItems: "center",
    mb: "10px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "25px",
    letterSpacing: "1px",
    color: "delftBlue",
  },
  image: {
    w: "250px",
    h: "250px",
    borderRadius: "8px",
    border: "1px",
  },
  reviewDetails: {
    alignItems: "center",
    my: "20px",
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
    mt: "5px",
    _hover: {
      textDecoration: "none",
      opacity: "0.8",
    },
  },
};

function Reviews() {
  return (
    <Flex {...styles.reviewsContainer} direction="column">
      <Flex {...styles.titleContainer}>
        <Text {...styles.title}>{"Latest Review"}</Text>
      </Flex>

      <Flex {...styles.image} overflow="hidden">
        <Image
          w="250px"
          h="250px"
          objectFit="cover"
          src="https://i.ytimg.com/vi/K8IXWzKcJEQ/hqdefault.jpg"
          alt="review img"
        />
      </Flex>

      <Flex {...styles.reviewDetails} direction="column">
        <Link {...styles.recordName} as={NextLink} href={"/"}>
          <Text>{"Magnolia Electric Co."}</Text>
        </Link>
        <Text {...styles.artistName}>{"Songs:Ohia"}</Text>
      </Flex>

      <Link {...styles.seeAll} as={NextLink} href={"/"}>
        <Text>{"All Reviews"}</Text>
      </Link>
    </Flex>
  );
}

export default Reviews;
