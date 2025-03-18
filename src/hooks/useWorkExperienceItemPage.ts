import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useSanityDataStore from "../store/useSanityDataStore";

import requestStatus from "../constants/requestStatus";

function useWorkExperienceItemPage() {
  const router = useRouter();

  const sanityData = useSanityDataStore((state: any) => state.sanityData);

  const [status, setStatus] = useState(requestStatus.IDLE);
  const [data, setData] = useState<any>(undefined);

  const getData = () => {
    const experienceSanityData = sanityData["work-experience"];

    if (!router?.query?.rev || !experienceSanityData) return;

    setStatus(requestStatus.IS_LOADING);

    const _rev = router?.query?.rev[0];

    const pageData = experienceSanityData.find(
      (experience: any) => experience?._rev === _rev
    );

    setData(pageData);
    setStatus(pageData ? requestStatus.HAS_SUCCESS : requestStatus.HAS_ERROR);
  };

  useEffect(() => {
    getData();
  }, [router?.query]);

  return {
    status,
    data,
  };
}

export default useWorkExperienceItemPage;
