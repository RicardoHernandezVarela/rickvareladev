import { Flex, Text, Image, border } from "@chakra-ui/react";

import { FaCalendar, FaBriefcase } from "react-icons/fa";

const styles = {
  card: {
    w: "auto",
    maxW: "520px",
    h: "auto",
    alignItems: "center",
    gap: "16px",
    cursor: "pointer",
  },
  image: {
    w: "135px",
    h: "135px",
    minW: "135px",
    minH: "135px",
    border: "1px",
    borderColor: "lavender",
    borderRadius: "6px",
  },
  textContainer: {
    gap: "8px",
    py: "5px",
  },
  textHeader: {
    fontSize: "10px",
    gap: "8px",
  },
  title: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "12px",
  },
};

function BlockCard(props: {
  data: Record<string, any>;
  setSelectedCard: () => void;
}) {
  const { data, setSelectedCard } = props;

  return (
    <Flex
      {...styles.card}
      direction={{ sm: "column", md: "row" }}
      onClick={setSelectedCard}
    >
      <Image
        objectFit="cover"
        src={data?.image?.url}
        alt="work img"
        {...styles.image}
        backgroundColor={data?.background || "transparent"}
      />

      <Flex {...styles.textContainer} direction="column">
        <Flex {...styles.textHeader}>
          <Flex alignItems="center" gap="5px">
            <FaCalendar />
            <Text>{data?.dates}</Text>
          </Flex>

          <Flex alignItems="center" gap="5px">
            <FaBriefcase />
            <Text>{data?.position}</Text>
          </Flex>
        </Flex>

        <Text {...styles.title}>{data?.place}</Text>

        <Text {...styles.text} noOfLines={4}>
          {data?.summary}
        </Text>
      </Flex>
    </Flex>
  );
}

export default BlockCard;
