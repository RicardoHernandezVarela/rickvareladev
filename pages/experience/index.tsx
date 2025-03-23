import { Flex } from "@chakra-ui/react";

import BlockCards from "@/src/sections/BlockCards";

import useWorkExperience from "@/src/components/Home/WorkExperience/useWorkExperience";

const styles = {
  mainContainer: {
    w: "100%",
    maxW: "1650px",
    h: "100vh",
    alignItems: "center",
  },
};

function Experience() {
  const { status, data } = useWorkExperience();

  return (
    <Flex {...styles.mainContainer} direction="column" overflowY="scroll">
      <BlockCards status={status} data={data} />
    </Flex>
  );
}

export default Experience;
