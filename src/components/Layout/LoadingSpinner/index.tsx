import { Spinner } from "@chakra-ui/react";

import requestStatus from "@/src/constants/requestStatus";

function LoadingSpinner(props: { status: string }) {
  const { status } = props;

  if (status !== requestStatus.IDLE && status !== requestStatus.IS_LOADING)
    return null;

  return <Spinner size="xl" color="bleu" thickness="4px" speed="0.65s" />;
}

export default LoadingSpinner;
