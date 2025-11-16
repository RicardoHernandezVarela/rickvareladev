import { Flex, Text } from "@chakra-ui/react";

import InlineCards from "@/src/sections/InlineCards";

const styles = {
  mainContainer: {
    w: "100%",
    maxW: "1650px",
    h: "100vh",
    alignItems: "center",
  },
};

function ProjectsPage() {
  return (
    <Flex {...styles.mainContainer} direction="column" overflowY="scroll">
      <InlineCards />
    </Flex>
  );
}

export default ProjectsPage;
