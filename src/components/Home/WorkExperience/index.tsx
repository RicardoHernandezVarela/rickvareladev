import { Flex, Text, Spinner } from "@chakra-ui/react";

import WorkExperienceCard from "./WorkExperienceCard";
import useWorkExperience from "./useWorkExperience";

import requestStatus from "../../../constants/requestStatus";

import scrollBarStyles from "@/src/constants/scrollBarStyles";

const styles = {
  workExperienceContainer: {
    w: { base: "87vw", lg: "72vw", xl: "76.5vw" },
    maxW: "1650px",
    h: "317px",
    mt: "8px",
    mb: "16px",
    p: "24px",
    bg: "white",
    borderRadius: "24px",
    boxShadow: "md",
    //border: "1px"
  },
  titleContainer: {
    mb: "20px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "40px",
    letterSpacing: "1px",
    color: "delftBlue",
  },
  workExperienceCards: {
    gap: "32px",
  },
};

function WorkExperience() {
  const { status, data } = useWorkExperience();

  return (
    <Flex {...styles.workExperienceContainer} direction="column">
      <Flex {...styles.titleContainer}>
        <Text {...styles.title}>{"My Work Experience"}</Text>
      </Flex>

      {(status === requestStatus.IDLE ||
        status === requestStatus.IS_LOADING) && <Spinner size="xl" color="bleu" thickness="4px" speed="0.65s" />
}

      {/* WORK EXPERIENCE CARDS */}
      {data && status === requestStatus.HAS_SUCCESS && (
        <Flex {...styles.workExperienceCards} overflowX="scroll">
          {data?.map((item: any) => {
            return (
              <WorkExperienceCard
                key={item?._id}
                place={item?.place}
                position={item?.position}
                dates={item?.dates}
                image={item?.image}
                details={item?.details}
                _createdAt={item?._createdAt}
              />
            );
          })}
        </Flex>
      )}
    </Flex>
  );
}

export default WorkExperience;
