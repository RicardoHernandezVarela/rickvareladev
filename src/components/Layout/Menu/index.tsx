import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

import MenuContent from "./MenuContent";

function Menu(props: {
  isOpen: boolean;
  onClose: () => void;
  isDesktop: boolean;
}) {
  const { isOpen, onClose, isDesktop } = props;

  /* DESKTOP */
  if (isDesktop) {
    return (
      <Flex
        direction="column"
        w={{ base: "0", lg: "250px" }}
        h="100vh"
        zIndex="overlay"
        boxShadow="md"
        bg="white"
      >
        <MenuContent />
      </Flex>
    );
  }

  /* MOBILE */
  return (
    <Flex direction="column">
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
        <DrawerContent bg="#F9F9F9">
          <DrawerCloseButton />
          <MenuContent />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Menu;
