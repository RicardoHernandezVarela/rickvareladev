import NextLink from "next/link";
import { Flex, Text, Link, Image } from "@chakra-ui/react";

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
    bg: "bleu",
    borderRadius: "12px",
  },
  placeText: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1",
    letterSpacing: "0.5px",
    color: "eerieBlack",
    mt: "12px",
    mb: "7px",
  },
  positionText: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1",
    letterSpacing: "0.5px",
    color: "mainMenuOption",
    mb: "7px",
  },
  dateText: {
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "1",
    letterSpacing: "1px",
    color: "bleu",
  },
};

function WorkExperienceCard() {
  return (
    <Link href={"/"} as={NextLink} {...styles.link}>
      <Flex {...styles.card} direction="column">
        <Flex {...styles.cardImage} overflow="hidden">
          <Image
            objectFit="cover"
            src="https://picsum.photos/120/110"
            alt="work img"
          />
        </Flex>
        <Text {...styles.placeText}>{"Place"}</Text>
        <Text {...styles.positionText}>{"Position"}</Text>
        <Text {...styles.dateText}>{"Dates"}</Text>
      </Flex>
    </Link>
  );
}

export default WorkExperienceCard;
