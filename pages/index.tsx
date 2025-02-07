import { Flex } from "@chakra-ui/react";

import WorkExperience from "@/src/components/Home/WorkExperience";
import MyProjects from "@/src/components/Home/MyProjects";
import Reviews from "@/src/components/Home/Reviews";

import scrollBarStyles from "@/src/constants/scrollBarStyles";

const styles = {
  mainContainer: {
    w: "100%",
    maxW: "1650px",
    h: "100vh",
    alignItems: "center",
  },
  projectsContainer: {
    w: { base: "100%", lg: "72vw", xl: "100%" },
    maxW: "1650px",
    alignItems: { base: "center", lg: "normal" },
    gap: "32px",
    mt: "16px",
    mb: { base: "20px", lg: "20px" },
  },
};

function Home() {
  return (
    <Flex
      {...styles.mainContainer}
      direction="column"
      overflowY="scroll"
      css={scrollBarStyles}
    >
      <Flex alignItems="center" direction="column">
        {/* WORK EXPERIENCE */}
        <WorkExperience />

        {/* PROJECTS */}
        <Flex
          {...styles.projectsContainer}
          direction={{ base: "column", lg: "row" }}
        >
          {/* MY PROJECTS */}
          <MyProjects />

          {/* REVIEWS */}
          <Reviews />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
