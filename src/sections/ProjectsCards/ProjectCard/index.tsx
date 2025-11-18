import NextLink from "next/link";
import { Flex, Text, Image, Link } from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const styles = {
  card: {
    w: { base: "100%", md: "500px" },
    h: { base: "130px", md: "200px" },
    alignItems: "center",
    bg: "magnolia",
    borderRadius: "16px",
    boxShadow: "lg",
    border: "1px",
    borderColor: "vistaBlue",
  },
  textContainer: {
    w: "100%",
    ml: { base: "12px", lg: "16px" },
    gap: "10px",
  },
  link: {
    _hover: {
      textDecoration: "none",
      opacity: "0.8",
    },
  },
  projectName: {
    fontSize: { base: "12px", lg: "14px" },
    fontWeight: "700",
    lineHeight: "19px",
    letterSpacing: "0.5px",
    color: "eerieBlack",
  },
  summary: {
    maxW: "90%",
    display: { base: "none", md: "block" },
    fontSize: { base: "12px", lg: "12px" },
    fontWeight: "500",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "mainMenuOption",
  },
  tools: {
    maxW: "90%",
    fontSize: { base: "11px", lg: "12px" },
    fontWeight: "500",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "bleu",
  },
  repoLink: {
    w: "32px",
    h: "32px",
    borderRadius: "8px",
    border: "1px",
    borderColor: "delftBlue",
    top: { base: "-23px", lg: "-14px" },
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

function ProjectCard(props: { project: Record<string, any> }) {
  const { project } = props;

  return (
    <Flex {...styles.card} position="relative">
      <Image
        width={{ base: "128px", md: "190px" }}
        height={{ base: "128px", md: "198px" }}
        objectFit="cover"
        src={project?.image?.url}
        alt="project img"
        borderTopLeftRadius="16px"
        borderBottomLeftRadius="16px"
      />

      <Flex {...styles.textContainer} direction="column">
        <Text {...styles.projectName}>{project?.name}</Text>
        <Text {...styles.summary}>{project?.summary}</Text>
        <Text {...styles.tools}>{project?.stack}</Text>
      </Flex>

      {/* SITE */}
      <Link
        {...styles.repoLink}
        isExternal
        href={project?.site}
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
        href={project?.repo}
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
