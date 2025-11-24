import NextLink from "next/link";

import { Flex, Text, Image, Link } from "@chakra-ui/react";

import { FaCalendar, FaBriefcase } from "react-icons/fa";

import routes from "@/src/constants/routes";

const styles = {
  card: {
    w: "auto",
    maxW: "520px",
    h: "auto",
    alignItems: "center",
    gap: "16px",
    cursor: "pointer",
  },
  imageContainer: {
    w: "135px",
    h: "135px",
    minW: "135px",
    minH: "135px",
    alignItems: "center",
    justifyContent: "center",
    border: "1px",
    borderColor: "lavender",
    borderRadius: "6px",
  },
  image: {
    w: "100px",
    h: "100px",
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
  link: {
    _hover: {
      textDecoration: "none",
      opacity: "0.9",
    },
  },
};

function BlockCard(props: {
  data: Record<string, any>;
  setSelectedCard: () => void;
}) {
  const { data, setSelectedCard } = props;

  return (
    <>
      <Flex
        {...styles.card}
        display={{ sm: "none", lg: "flex" }}
        direction={{ sm: "column", md: "row" }}
        onClick={setSelectedCard}
      >
        <Flex
          {...styles.imageContainer}
          backgroundColor={data?.background || "transparent"}
        >
          <Image
            src={data?.image?.url}
            alt="work img"
            {...styles.image}
            borderRadius={data?.isNotRoundedInCar ? "0" : "full"}
          />
        </Flex>

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

      <Link
        {...styles.link}
        as={NextLink}
        href={`${routes.WORK_EXPERIENCE_ITEM}${data?._rev}`}
      >
        <Flex
          {...styles.card}
          display={{ sm: "flex", lg: "none" }}
          direction={{ sm: "column", md: "row" }}
          //onClick={setSelectedCard}
        >
          <Flex
            {...styles.imageContainer}
            backgroundColor={data?.background || "transparent"}
          >
            <Image
              src={data?.image?.url}
              alt="work img"
              {...styles.image}
              borderRadius={data?.isNotRoundedInCar ? "0" : "full"}
            />
          </Flex>

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
      </Link>
    </>
  );
}

export default BlockCard;
