import NextLink from "next/link";

import { Flex, Text, Image, Link } from "@chakra-ui/react";

import { FaCalendar, FaBriefcase, FaMicrophone } from "react-icons/fa";

import routes from "@/src/constants/routes";

const summaryTest =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

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
    w: "100%",
    h: "100%",
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

function ReviewCard(props: {
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
            borderRadius="10px"
          />
        </Flex>

        <Flex {...styles.textContainer} direction="column">
          <Flex {...styles.textHeader}>
            <Flex alignItems="center" gap="5px">
              <FaMicrophone />
              <Text>{data?.artist}</Text>
            </Flex>

            <Flex alignItems="center" gap="5px">
              <FaCalendar />
              <Text>{data?.year}</Text>
            </Flex>
          </Flex>

          <Text {...styles.title}>{data?.place}</Text>

          <Text {...styles.text} noOfLines={4}>
            {data?.summary || summaryTest}
          </Text>
        </Flex>
      </Flex>

      <Link
        {...styles.link}
        as={NextLink}
        href={`${routes.ALBUM_REVIEW}/${data?._rev}`}
      >
        <Flex
          {...styles.card}
          display={{ sm: "flex", lg: "none" }}
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
              borderRadius="10px"
            />
          </Flex>

          <Flex {...styles.textContainer} direction="column">
            <Flex {...styles.textHeader}>
              <Flex alignItems="center" gap="5px">
                <FaMicrophone />
                <Text>{data?.artist}</Text>
              </Flex>

              <Flex alignItems="center" gap="5px">
                <FaCalendar />
                <Text>{data?.year}</Text>
              </Flex>
            </Flex>

            <Text {...styles.title}>{data?.place}</Text>

            <Text {...styles.text} noOfLines={4}>
              {data?.summary || summaryTest}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </>
  );
}

export default ReviewCard;
