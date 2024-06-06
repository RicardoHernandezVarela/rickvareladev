import { useRef } from "react";

import {
  Flex,
  Button,
  useDisclosure,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useMediaQuery,
} from "@chakra-ui/react";

import Header from "../src/components/Layout/Header";
import Menu from "@/src/components/Layout/Menu";

const styles = {};

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 1023px)");

  return (
    <Flex w="100%" h="100%">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}

export default Home;
