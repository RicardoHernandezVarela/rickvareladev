import { Flex, Text, Image } from "@chakra-ui/react";

import { FaCalendar, FaBriefcase } from "react-icons/fa";

const styles = {
  card: {
    w: "320px",
    h: "160px",
    border: "1px",
  },
};

function BlockCard() {
  return (
    <Flex {...styles.card}>
      <Image
        objectFit="cover"
        src="https://picsum.photos/120/110"
        alt="work img"
      />

      <Flex direction="column">
        <Flex>
          <Flex>
            <FaCalendar />
            <Text>Apr 8, 2023</Text>
          </Flex>
          <Flex>
            <FaBriefcase />
            <Text>Erol Ahmed</Text>
          </Flex>
        </Flex>

        <Text>Just greatest Article</Text>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat [...]
        </Text>
      </Flex>
    </Flex>
  );
}

export default BlockCard;
