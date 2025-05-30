import NextLink from "next/link";
import { Flex, Text, Image, Link } from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const styles = {
  card: {
    w: { base: "100%", lg: "85%" },
    h: "100px",
    alignItems: "center",
    bg: "magnolia",
    borderRadius: "16px",
    boxShadow: "lg",
    border: "1px",
    borderColor: "vistaBlue",
  },
  textContainer: {
    w: "100%",
    ml: { base: "12px", lg: "24px" },
    gap: "10px",
  },
  link: {
    _hover: {
      textDecoration: "none",
      opacity: "0.8",
    },
  },
  projectName: {
    fontSize: { base: "14px", lg: "16px" },
    fontWeight: "500",
    lineHeight: "19px",
    letterSpacing: "0.5px",
    color: "eerieBlack",
  },
  tools: {
    maxW: "90%",
    fontSize: { base: "12px", lg: "14px" },
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
        boxSize="98px"
        objectFit="cover"
        src={project?.image?.url}
        alt="project img"
        borderTopLeftRadius="16px"
        borderBottomLeftRadius="16px"
      />

      <Flex {...styles.textContainer} direction="column">
        <Link href={"/"} as={NextLink} {...styles.link}>
          <Text {...styles.projectName}>{project?.name}</Text>
        </Link>
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
