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
} from "@chakra-ui/react";

function Menu(props: { isOpen: boolean; onClose: () => void }) {
  const { isOpen, onClose } = props;

  return (
    <Flex direction="column" w={{ base: "0", lg: "320px" }}>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        {/* <DrawerOverlay /> */}
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
