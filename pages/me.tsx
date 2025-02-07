import { Flex } from "@chakra-ui/react";

function Me() {
  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      <Flex w="700px" h="500px" bg="red.200" overflowY="scroll">
        <Flex w="500px" h="800px" bg="blue.100">
            scroll
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Me;
