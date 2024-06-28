import NextLink from "next/link";
import { Flex, Text, Link } from "@chakra-ui/react";

import ProjectCard from "./ProjectCard";

import scrollBarStyles from "@/src/constants/scrollBarStyles";

const styles = {
  myProjectsContainer: {
    w: "53vw",
    h: "441px",
    bg: "white",
    p: "24px",
    borderRadius: "24px",
    boxShadow: "sm",
  },
  titleContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    mb: "20px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "40px",
    letterSpacing: "1px",
    color: "delftBlue",
  },
  seeAll: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "mainMenuOption",
    _hover: {
      textDecoration: "none",
      opacity: "0.8",
    },
  },
  projectsCards: {
    alignItems: "center",
    gap: "36px",
    py: "32px",
  },
};

function MyProjects() {
  return (
    <Flex {...styles.myProjectsContainer} direction="column">
      <Flex {...styles.titleContainer}>
        <Text {...styles.title}>{"My Projects"}</Text>

        <Link {...styles.seeAll} as={NextLink} href={"/"}>
          <Text>{"See All"}</Text>
        </Link>
      </Flex>

      <Flex direction="column" overflowY="scroll" css={scrollBarStyles}>
        <Flex {...styles.projectsCards} direction="column">
          <ProjectCard />

          <ProjectCard />

          <ProjectCard />

          <ProjectCard />

          <ProjectCard />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MyProjects;
