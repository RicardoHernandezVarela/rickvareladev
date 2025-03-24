import NextLink from "next/link";
import { Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";

import routes from "../../../../constants/routes";

const styles = {
  link: {
    _hover: {
      textDecoration: "none",
      opacity: "0.9",
    },
  },
  card: {
    w: "160px",
    h: "205px",
    alignItems: "center",
    px: "14px",
    pt: "14px",
    pb: "12px",
    borderRadius: "16px",
    border: "1px",
    borderColor: "bleuDeFrance",
  },
  cardImage: {
    w: "120px",
    h: "110px",
    //bg: "bleu",
    border: "1px",
    borderColor: "bleu",
    borderRadius: "12px",
  },
  placeText: {
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: "1",
    letterSpacing: "0.5px",
    color: "eerieBlack",
    mt: "12px",
    mb: "7px",
  },
  positionText: {
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "1",
    letterSpacing: "0.5px",
    color: "mainMenuOption",
    mb: "7px",
  },
  dateText: {
    fontSize: "10px",
    fontWeight: "600",
    lineHeight: "1",
    letterSpacing: "1px",
    color: "bleu",
  },
};

function WorkExperienceCard(props: {
  place: string;
  position: string;
  dates: string;
  image: { url: string };
  background?: string;
  _createdAt: string;
  _rev: string;
  details?: any;
}) {
  const {
    place,
    position,
    dates,
    image,
    background,
    details,
    _createdAt,
    _rev,
  } = props;

  return (
    <Link
      href={`${routes.WORK_EXPERIENCE_ITEM}${_rev}`}
      as={NextLink}
      {...styles.link}
    >
      <Flex {...styles.card} direction="column">
        <Flex
          {...styles.cardImage}
          backgroundColor={background || "transparent"}
          overflow="hidden"
        >
          {image?.url && (
            <Image
              src={image?.url}
              alt="we-img"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          )}
        </Flex>
        <Text {...styles.placeText} textAlign="center" noOfLines={1}>
          {place}
        </Text>
        <Text {...styles.positionText} textAlign="center" noOfLines={1}>
          {position}
        </Text>
        <Text {...styles.dateText} textAlign="center" noOfLines={1}>
          {dates}
        </Text>
      </Flex>
    </Link>
  );
}

export default WorkExperienceCard;
