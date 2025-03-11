import NextLink from "next/link";
import { useRouter } from "next/router";

import {
  Flex,
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  Avatar,
  Link,
} from "@chakra-ui/react";

import { IoIosArrowForward } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";

import breadCrumbsData from "../../../constants/breadCrumbsData";

const styles = {
  header: {
    w: { base: "100%", lg: "72vw", xl: "76.5vw" },
    maxW: "1650px",
    h: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    my: { base: "15px", lg: "32px" },
    px: "15px",
    gap: { base: "10px", lg: "0" },
  },
  primaryBreadcrumbItem: {
    color: "eerieBlack",
    fontSize: { base: "14px", lg: "20px" },
    fontWeight: "700",
    lineHeight: "1",
    letterSpacing: "0.12px",
    m: "0",
    p: "0",
  },
  secondaryBreadcrumbItem: {
    color: "mainMenuOption",
    fontSize: { base: "14px", lg: "20px" },
    fontWeight: "500",
    lineHeight: "1",
    letterSpacing: "0.12px",
    m: "0",
    p: "0",
  },
  separator: { width: "16px", height: "16px", color: "#1E2122" },
  avatarContainer: {
    w: { base: "100%", lg: "auto" },
    alignItems: "center",
    justifyContent: "space-around",
  },
  menuIcon: {
    width: "30px",
    height: "30px",
    color: "#4957C1",
  },
};

function Header(props: { onOpen: () => void }) {
  const { onOpen } = props;

  const router = useRouter();
  const pathname = router?.pathname;

  console.log("pathname: ", pathname);

  const breadCrumbData = breadCrumbsData[pathname];

  return (
    <Flex {...styles.header} direction={{ base: "column-reverse", lg: "row" }}>
      {/* BREADCRUMB */}
      <Breadcrumb
        spacing="8px"
        display="flex"
        alignItems="center"
        separator={<IoIosArrowForward style={styles.separator} />}
      >
        <BreadcrumbItem {...styles.primaryBreadcrumbItem}>
          <Link
            as={NextLink}
            href={breadCrumbData?.primaryItem?.route || "/"}
            textTransform="capitalize"
          >
            {breadCrumbData?.primaryItem?.text || "home"}
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem {...styles.secondaryBreadcrumbItem}>
          <Link
            as={NextLink}
            href={breadCrumbData?.secondaryItem?.route || "/"}
            textTransform="capitalize"
          >
            {breadCrumbData?.secondaryItem?.text || ""}
          </Link>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* AVATAR */}
      <Flex {...styles.avatarContainer}>
        <Avatar src="https://bit.ly/dan-abramov" />
        <Box ml="3">
          <Text color="eerieBlack" fontWeight="bold">
            Rick Varela
          </Text>
          <Text color="eerieBlack" fontSize="sm">
            Frontend Developer
          </Text>
        </Box>

        <Flex display={{ base: "flex", lg: "none" }} onClick={onOpen}>
          <RiMenu2Fill style={styles.menuIcon} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
