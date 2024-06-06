import { ReactElement } from "react";
import { Flex, Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";

import { GiCompactDisc } from "react-icons/gi";

import Menu from "@/src/components/Layout/Menu";

const styles = {
  mainContainer: {
    w: "100%",
    h: "100%",
  },
  contentContainer: {
    w: { base: "100%", lg: "calc(100% - 320px)" },
    h: "100vh",
    bg: "#F3F4F8",
  },
  menuButtonContainer: {
    display: { base: "flex", lg: "none" },
    top: "10px",
    right: "10px",
  },
  menuButtonIcon: { width: "40px", height: "40px", color: "#FF7E3A" },
};

function PageWrapper(props: { children: ReactElement }) {
  const { children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 1023px)");

  return (
    <Flex {...styles.mainContainer}>
      {/* MENU */}
      <Menu isOpen={isDesktop ? true : isOpen} onClose={onClose} />

      <Flex {...styles.contentContainer} direction="column" position="relative">
        <Flex {...styles.menuButtonContainer} position="absolute">
          <Button variant="unstyled" onClick={onOpen}>
            <GiCompactDisc style={styles.menuButtonIcon} />
          </Button>
        </Flex>

        {children}
      </Flex>
    </Flex>
  );
}

export default PageWrapper;
