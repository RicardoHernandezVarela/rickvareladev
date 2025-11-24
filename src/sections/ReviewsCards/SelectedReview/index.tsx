import NextLink from "next/link";

import { Flex, Link, Text } from "@chakra-ui/react";

import { FaCalendar } from "react-icons/fa";

import routes from "@/src/constants/routes";

const summaryTest =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const styles = {
  selectedCardContainer: {
    display: { sm: "none", lg: "flex" },
    w: "450px",
    minH: "450px",
    borderRadius: "24px",
    border: "1px",
    borderColor: "lavender",
    bgPosition: "center",
    bgRepeat: "no-repeat",
    bgSize: "100% 100%",
    p: "20px",
    justifyContent: "space-between",
  },
  artist: {
    w: "max-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "3px 8px",
    //bg: "white",
    //color: "eerieBlack",
    border: "1px",
    borderColor: "lavender",
    borderRadius: "8px",
    fontSize: "11px",
    backdropFilter: "blur(2px)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  bottomContainer: {
    color: "white",
    gap: "10px",
    backdropFilter: "blur(3px)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  link: {
    _hover: {
      textDecoration: "none",
      opacity: "0.9",
    },
  },
  summary: {
    fontSize: "12px",
  },
  date: {
    alignItems: "center",
    gap: "5px",
    fontSize: "11px",
  },
};

function SelectedReview(props: { selectedCard: Record<string, any> }) {
  const { selectedCard } = props;

  if (!selectedCard) return null;

  return (
    <Flex
      {...styles.selectedCardContainer}
      bgImage={selectedCard?.image?.url}
      direction="column"
    >
      <Flex>
        {/* <Text {...styles.artist} textAlign="center" color={selectedCard?.color}>
          {selectedCard?.artist}
        </Text> */}
      </Flex>

      <Flex
        {...styles.bottomContainer}
        direction="column"
        color={selectedCard?.color || "white"}
      >
        <Text {...styles.name}>{selectedCard?.name}</Text>
        <Link
          {...styles.link}
          as={NextLink}
          href={`${routes.ALBUM_REVIEW}/${selectedCard?._rev}`}
        >
          <Text {...styles.summary} cursor="pointer">
            {selectedCard?.summary || summaryTest}
          </Text>
        </Link>

        <Flex {...styles.date}>
          <FaCalendar />
          <Text>{selectedCard?.year}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SelectedReview;
