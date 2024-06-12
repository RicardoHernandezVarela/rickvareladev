import { Flex } from "@chakra-ui/react";

const styles = {
  mainContainer: {
    w: "100%",
    h: "100vh",
    alignItems: "center",
  },
  scrollableContainer: {
    w: "100%",
  },
  workExperienceContainer: {
    w: "1062px",
    h: "317px",
    mt: "8px",
    mb: "16px",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "sm",
  },
  projectsContainer: {
    w: "100%",
    gap: "32px",
    mt: "16px",
    mb: "32px",
  },
  myProjectsContainer: {
    w: "750px",
    h: "441px",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "sm",
  },
  reviewsContainer: {
    w: "281px",
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
        <Flex {...styles.workExperienceContainer}></Flex>

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
