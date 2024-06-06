import { useRouter } from "next/router";

import {
  Flex,
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Avatar,
  Badge,
} from "@chakra-ui/react";

import { IoIosArrowForward } from "react-icons/io";

import breadCrumbsData from "../../constants/breadCrumbsData";

const styles = {
  header: {
    w: "1062px",
    h: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    my: "32px",
    px: "15px",
  },
  primaryBreadcrumbItem: {
    color: "#0A0502",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "28px",
    letterSpacing: "0.12px",
  },
  secondaryBreadcrumbItem: {
    color: "#99938F",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "28px",
    letterSpacing: "0.2px",
  },
  separator: { width: "16px", height: "16px", color: "#0A0502" },
};

function Header() {
  const router = useRouter();
  const pathname = router?.pathname;

  const breadCrumbData = breadCrumbsData[pathname];
  const { primaryItem, secondaryItem } = breadCrumbData;

  return (
    <Flex {...styles.header}>
      {/* BREADCRUMB */}
      <Breadcrumb
        spacing="8px"
        alignItems="center"
        separator={<IoIosArrowForward style={styles.separator} />}
      >
        <BreadcrumbItem {...styles.primaryBreadcrumbItem}>
          <BreadcrumbLink href={primaryItem?.route} textTransform="capitalize">
            {primaryItem?.text}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem {...styles.secondaryBreadcrumbItem}>
          <BreadcrumbLink href={secondaryItem?.route} textTransform="capitalize">
            {secondaryItem?.text}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* AVATAR */}
      <Flex>
        <Avatar src="https://bit.ly/dan-abramov" />
        <Box ml="3">
          <Text fontWeight="bold">Rick Varela</Text>
          <Text fontSize="sm">Frontend Developer</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Header;
