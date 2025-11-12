import { Flex, Text, Spinner } from "@chakra-ui/react";
import PortableTextWrapper from "@/src/components/Layout/PortableTextWrapper";

import useSanityData from "@/src/hooks/useSanityData";

import requestStatus from "@/src/constants/requestStatus";
import scrollBarStyles from "@/src/constants/scrollBarStyles";

const styles = {
  mainContainer: {
    w: "100%",
    maxW: "1650px",
    h: "100vh",
  },
  spinnerContainer: {
    w: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    color: "bleu",
    thickness: "4px",
    speed: "0.65s",
  },
  blockContainer: {
    w: { base: "100%", lg: "72vw", xl: "100%" },
    maxW: "1650px",
    alignItems: { base: "center", lg: "normal" },
    gap: "12px",
    mb: { base: "10px", lg: "10px" },
    px: { base: "20px", md: "40px", lg: "45px" },
  },
  title: {
    fontSize: { base: "16px", md: "16px" },
  },
  portableTextContainer: {
    alignItems: "center",
    maxH: "78vh",
  },
};

function BlogEntry({
  status,
  data,
  title,
}: {
  status: string;
  data: Record<string, any>;
  title?: string;
}) {
  return (
    <Flex direction="column" {...styles.mainContainer}>
      {(status === requestStatus.IDLE ||
        status === requestStatus.IS_LOADING) && (
        <Flex {...styles.spinnerContainer}>
          <Spinner size="xl" {...styles.spinner} />
        </Flex>
      )}

      {status === requestStatus.HAS_SUCCESS && (
        <Flex direction="column" {...styles.blockContainer}>
          {title && <Text {...styles.title}>{title}</Text>}

          {data?.details && data?.details?.length > 0 && (
            <Flex
              direction="column"
              {...styles.portableTextContainer}
              overflowY="scroll"
              css={scrollBarStyles}
            >
              <PortableTextWrapper value={data?.details} />
            </Flex>
          )}
        </Flex>
      )}

      {status === requestStatus.HAS_ERROR && <Text>There is no data.</Text>}
    </Flex>
  );
}

export default BlogEntry;
