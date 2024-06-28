import NextLink from "next/link";
import { useRouter } from "next/router";

import {
  Flex,
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Avatar,
  Link,
} from "@chakra-ui/react";

import { IoIosArrowForward } from "react-icons/io";

import breadCrumbsData from "../../../constants/breadCrumbsData";

const styles = {
  header: {
    w: "76.5vw",
    h: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    my: "32px",
    px: "15px",
  },
  primaryBreadcrumbItem: {
    color: "eerieBlack",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "28px",
    letterSpacing: "0.12px",
  },
  secondaryBreadcrumbItem: {
    color: "mainMenuOption",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "28px",
    letterSpacing: "0.2px",
  },
  separator: { width: "16px", height: "16px", color: "#1E2122" },
};

function Header() {
  const router = useRouter();
  const pathname = router?.pathname;

  const breadCrumbData = breadCrumbsData[pathname];

  return (
    <Flex {...styles.header}>
      {/* BREADCRUMB */}
      <Breadcrumb
        spacing="8px"
        alignItems="center"
        separator={<IoIosArrowForward style={styles.separator} />}
      >
        <BreadcrumbItem {...styles.primaryBreadcrumbItem}>
          <Link
            as={NextLink}
            href={breadCrumbData?.primaryItem?.route || "/"}
            textTransform="capitalize"
          >
            {breadCrumbData?.primaryItem?.text || ""}
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
      <Flex>
        <Avatar src="https://bit.ly/dan-abramov" />
        <Box ml="3">
          <Text color="eerieBlack" fontWeight="bold">
            Rick Varela
          </Text>
          <Text color="eerieBlack" fontSize="sm">
            Frontend Developer
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Header;
