import { Flex, Text } from "@chakra-ui/react";

import LoadingSpinner from "@/src/components/Layout/LoadingSpinner";
import ProjectsCards from "@/src/sections/ProjectsCards";

import useSanityData from "@/src/hooks/useSanityData";

const styles = {
  mainContainer: {
    w: "100%",
    maxW: "1650px",
    h: "100vh",
    alignItems: "center",
  },
};

function ProjectsPage() {
  const { data, status } = useSanityData({ dataItem: "project" });

  return (
    <Flex {...styles.mainContainer} direction="column" overflowY="scroll">
      <LoadingSpinner status={status} />

      <ProjectsCards status={status} data={data} />
    </Flex>
  );
}

export default ProjectsPage;
