import { Flex } from "@chakra-ui/react";

const styles = {
  mainContainer: {
    w: "100%",
    maxW: "1650px",
    h: "100vh",
    alignItems: "center",
  },
};

function Experience() {
  return (
    <Flex
      {...styles.mainContainer}
      direction="column"
      overflowY="scroll"
    ></Flex>
  );
}

export default Experience;
