import NextLink from "next/link";

import { Flex, Link, Text } from "@chakra-ui/react";

import { FaCalendar } from "react-icons/fa";

import routes from "@/src/constants/routes";

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
    bgSize: "105px",
    p: "25px",
    justifyContent: "space-between",
  },
  position: {
    w: "max-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "3px 8px",
    bg: "white",
    color: "eerieBlack",
    border: "1px",
    borderColor: "lavender",
    borderRadius: "8px",
    fontSize: "11px",
  },
  bottomContainer: {
    color: "white",
    gap: "10px",
  },
  title: {
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

function SelectedCard(props: { selectedCard: Record<string, any> }) {
  const { selectedCard } = props;

  if (!selectedCard) return null;

  return (
    <Flex
      {...styles.selectedCardContainer}
      bgImage={selectedCard?.image?.url}
      bgColor={selectedCard?.background}
      direction="column"
    >
      <Flex>
        <Text {...styles.position} textAlign="center">
          {selectedCard?.position}
        </Text>
      </Flex>

      <Flex
        {...styles.bottomContainer}
        direction="column"
        color={selectedCard?.color || "white"}
      >
        <Text {...styles.title}>{selectedCard?.place}</Text>
        <Link
          {...styles.link}
          as={NextLink}
          href={`${routes.WORK_EXPERIENCE_ITEM}${selectedCard?._rev}`}
        >
          <Text {...styles.summary}>{selectedCard?.summary}</Text>
        </Link>

        <Flex {...styles.date}>
          <FaCalendar />
          <Text>{selectedCard?.dates}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SelectedCard;
