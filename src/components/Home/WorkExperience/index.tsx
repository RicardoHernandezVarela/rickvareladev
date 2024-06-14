import { Flex, Text } from "@chakra-ui/react";

import WorkExperienceCard from "./WorkExperienceCard";

const styles = {
  workExperienceContainer: {
    w: "76.5vw",
    h: "317px",
    mt: "8px",
    mb: "16px",
    p: "24px",
    bg: "white",
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
  workExperienceCards: {
    gap: "32px",
  },
};

function WorkExperience() {
  return (
    <Flex {...styles.workExperienceContainer} direction="column">
      <Flex {...styles.titleContainer}>
        <Text {...styles.title}>{"My Work Experience"}</Text>
      </Flex>

      {/* WORK EXPERIENCE CARDS */}
      <Flex {...styles.workExperienceCards} overflowX="scroll">
        <WorkExperienceCard />

        <WorkExperienceCard />

        <WorkExperienceCard />

        <WorkExperienceCard />

        <WorkExperienceCard />
      </Flex>
    </Flex>
  );
}

export default WorkExperience;
