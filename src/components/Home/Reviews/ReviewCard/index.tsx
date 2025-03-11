import NextLink from "next/link";
import { Flex, Text, Image, Link, Skeleton } from "@chakra-ui/react";

const styles = {
  card: {
    w: { base: "87vw", md: "305px", lg: "305px", xl: "21.17vw" },
    maxW: "305px",
    h: "410px",
    alignItems: "center",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "md",
    p: "20px",
    gap: "12px",
    _hover: {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease-in-out",
    },
  },
  cardLink: {
    h: "410px",
    _hover: {
      textDecoration: "none",
      //opacity: "0.9",
    },
  },
  image: {
    w: "250px",
    h: "250px",
    borderRadius: "8px",
  },
  reviewDetails: {
    alignItems: "center",
    gap: "12px",
  },
  recordName: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "27px",
    letterSpacing: "0.5px",
    color: "eerieBlack",
  },
  year: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "mainMenuOption",
  },
};

function ReviewCard({
  loading,
  img,
  recordName,
  artistName,
  year,
}: {
  loading: boolean;
  img: string;
  recordName: string;
  artistName: string;
  year: string;
}) {
  return (
    <Link {...styles.cardLink} as={NextLink} href={"/"}>
      <Flex {...styles.card} direction="column">
        <Text {...styles.recordName}>{recordName}</Text>

        <Flex {...styles.image} overflow="hidden">
          {loading && <Skeleton {...styles.image} bg="magnolia" />}

          {!loading && (
            <Image
              w="250px"
              h="250px"
              objectFit="cover"
              src={img}
              alt="review img"
              //   _hover={{
              //     transform: "scale(1.2)",
              //     transition: "transform 0.3s ease-in-out",
              //   }}
            />
          )}
        </Flex>

        <Flex {...styles.reviewDetails} direction="column">
          <Text {...styles.recordName}>{artistName}</Text>
          <Text {...styles.year}>{year}</Text>
        </Flex>
      </Flex>
    </Link>
  );
}

export default ReviewCard;
