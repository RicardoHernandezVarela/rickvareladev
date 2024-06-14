import NextLink from "next/link";
import { Flex, Text, Image, Link } from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const styles = {
  card: {
    w: "85%",
    h: "100px",
    alignItems: "center",
    bg: "magnolia",
    borderRadius: "16px",
    boxShadow: "lg",
    border: "1px",
    borderColor: "vistaBlue",
  },
  textContainer: {
    ml: "24px",
    gap: "6px",
  },
  link: {
    _hover: {
      textDecoration: "none",
      opacity: "0.8",
    },
  },
  projectName: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "19px",
    letterSpacing: "0.5px",
    color: "eerieBlack",
  },
  tools: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "mainMenuOption",
  },
  repoLink: {
    w: "32px",
    h: "32px",
    borderRadius: "8px",
    border: "1px",
    borderColor: "delftBlue",
    top: "-14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "overlay",
    _hover: {
      textDecoration: "none",
      opacity: "0.8",
    },
  },
  icon: {
    color: "#2B357D",
  },
};

function ProjectCard() {
  return (
    <Flex {...styles.card} position="relative">
      <Image
        boxSize="100px"
        objectFit="cover"
        src="https://picsum.photos/200"
        alt="project img"
        borderTopLeftRadius="16px"
        borderBottomLeftRadius="16px"
      />

      <Flex {...styles.textContainer} direction="column">
        <Link href={"/"} as={NextLink} {...styles.link}>
          <Text {...styles.projectName}>{"Lesath"}</Text>
        </Link>
        <Text {...styles.tools}>
          {"Python, Django, HTML, JavaScript, CSS, Arduino"}
        </Text>
      </Flex>

      {/* SITE */}
      <Link
        {...styles.repoLink}
        isExternal
        href={"https://github.com/RicardoHernandezVarela/Lesath-Biosignals"}
        position="absolute"
        right="100px"
        bg="magnolia"
      >
        <MdWeb style={styles.icon} />
      </Link>

      {/* GITHUB */}
      <Link
        {...styles.repoLink}
        isExternal
        href={"https://github.com/RicardoHernandezVarela/Lesath-Biosignals"}
        position="absolute"
        right="40px"
        bg="magnolia"
      >
        <FaGithub style={styles.icon} />
      </Link>
    </Flex>
  );
}

export default ProjectCard;
