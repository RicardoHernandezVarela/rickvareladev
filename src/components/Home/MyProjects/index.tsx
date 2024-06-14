import { Flex, Text } from "@chakra-ui/react";

import ProjectCard from "./ProjectCard";

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
    mb: "20px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "40px",
    letterSpacing: "1px",
    color: "delftBlue",
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
      </Flex>

      <Flex direction="column" overflowY="scroll">
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
