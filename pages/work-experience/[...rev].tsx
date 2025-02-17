import { Flex, Text, Spinner } from "@chakra-ui/react";
import { PortableText } from "next-sanity";

import useWorkExperienceItemPage from "../../src/hooks/useWorkExperienceItemPage";
import requestStatus from "../../src/constants/requestStatus";

function WorkExperienceItemPage() {
  const { status, data } = useWorkExperienceItemPage();

  return (
    <Flex>
      {(status === requestStatus.IDLE ||
        status === requestStatus.IS_LOADING) && (
        <Spinner size="xl" color="bleu" thickness="4px" speed="0.65s" />
      )}

      {status === requestStatus.HAS_SUCCESS && (
        <Flex direction="column">
          <Text>{data?.place}</Text>

          {data?.details && data?.details?.length > 0 && (
            <div className="prose max-w-none">
              <PortableText value={data?.details} />
            </div>
          )}
        </Flex>
      )}
    </Flex>
  );
}

export default WorkExperienceItemPage;
