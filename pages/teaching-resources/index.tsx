import { Flex } from "@chakra-ui/react";

import NotesCards from "@/src/sections/NotesCards";

import useSanityData from "@/src/hooks/useSanityData";

const styles = {
  mainContainer: {
    w: "100%",
    maxW: "1650px",
    h: "100vh",
    alignItems: "center",
  },
};

function TeachingResources() {
  const { data, status } = useSanityData({ dataItem: "teaching-resources" });

  console.log("data: ", data);

  return (
    <Flex {...styles.mainContainer} direction="column" overflowY="scroll">
      <NotesCards data={data} status={status} />
    </Flex>
  );
}

export default TeachingResources;
