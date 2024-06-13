import { ReactElement, useRef } from "react";
import { Flex, Button, useDisclosure, useMediaQuery } from "@chakra-ui/react";

import { GiCompactDisc } from "react-icons/gi";

import Menu from "@/src/components/Layout/Menu";
import Header from "../Header";

const styles = {
  mainContainer: {
    w: "100%",
    h: "100vh",
  },
  contentContainer: {
    w: { base: "100%", lg: "calc(100% - 250px)" },
    alignItems: "center",
    bg: "magnolia",
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

  const contentRef = useRef();

  return (
    <Flex {...styles.mainContainer}>
      {/* MENU */}
      <Menu isOpen={isOpen} onClose={onClose} isDesktop={isDesktop} />

      <Flex
        ref={contentRef.current}
        {...styles.contentContainer}
        direction="column"
        position="relative"
      >
        {/* MENU TRIGGER */}
        <Flex {...styles.menuButtonContainer} position="absolute">
          <Button variant="unstyled" onClick={onOpen}>
            <GiCompactDisc style={styles.menuButtonIcon} />
          </Button>
        </Flex>

        {/* HEADER */}
        <Header />

        {children}
      </Flex>
    </Flex>
  );
}

export default PageWrapper;
