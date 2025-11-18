import { Flex, Text } from "@chakra-ui/react";

import ProjectCard from "./ProjectCard";

import requestStatus from "@/src/constants/requestStatus";

const styles = {
  mainContainer: {
    w: { base: "87vw", lg: "72vw", xl: "76.5vw" },
    maxW: "1650px",
    h: "auto",
    alignItems: "center",
    justifyContent: "center",
    mt: "8px",
    mb: "16px",
    p: "24px",
    pt: "50px",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "md",
    gap: "35px",
  },
  cardsContainer: {
    h: { sm: "80vh", md: "450px" },
    gap: "16px",
    pb: "10px",
  },
  emptyCard: {
    w: { base: "100%", md: "500px" },
  },
};

function ProjectsCards({
  status,
  data,
}: {
  status: string;
  data: Record<string, any>[];
}) {
  return (
    <Flex {...styles.mainContainer} flexWrap="wrap">
      {status === requestStatus.HAS_SUCCESS && (
        <>
          {data.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}

          <Flex {...styles.emptyCard} />
        </>
      )}

      {status === requestStatus.HAS_ERROR && <Text>There is no data.</Text>}
    </Flex>
  );
}

export default ProjectsCards;
