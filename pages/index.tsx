import { Flex } from "@chakra-ui/react";

import WorkExperience from "@/src/components/Home/WorkExperience";

const styles = {
  mainContainer: {
    w: "100%",
    h: "100vh",
    alignItems: "center",
  },
  scrollableContainer: {
    w: "100%",
  },
  projectsContainer: {
    w: "100%",
    gap: "32px",
    mt: "16px",
    mb: "32px",
  },
  myProjectsContainer: {
    w: "53vw",
    h: "441px",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "sm",
  },
  reviewsContainer: {
    w: "21.17vw",
    h: "441px",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "sm",
  },
};

function Home() {
  return (
    <Flex {...styles.mainContainer} direction="column" overflowY="scroll">
      <Flex direction="column">
        {/* WORK EXPERIENCE */}
        <WorkExperience />

        {/* PROJECTS */}
        <Flex {...styles.projectsContainer}>
          {/* MY PROJECTS */}
          <Flex {...styles.myProjectsContainer}></Flex>

          {/* REVIEWS */}
          <Flex {...styles.reviewsContainer}></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
