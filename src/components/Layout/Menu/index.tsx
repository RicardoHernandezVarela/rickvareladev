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
        w={{ base: "0", lg: "320px" }}
        h="100vh"
        zIndex="overlay"
        boxShadow="md"
      >
        <Text>DESKTOP</Text>
      </Flex>
    );
  }

  /* MOBILE */
  return (
    <Flex direction="column" w={{ base: "0", lg: "320px" }}>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent bg="#F9F9F9">
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Menu;
