import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useExperienceStore from "../store/useExperienceStore";
import requestStatus from "../constants/requestStatus";

function useWorkExperienceItemPage() {
  const router = useRouter();

  const experience = useExperienceStore((state: any) => state.experience);

  const [status, setStatus] = useState(requestStatus.IDLE);
  const [data, setData] = useState<any>(undefined);

  const getData = () => {
    if (!router?.query?.rev) return;

    setStatus(requestStatus.IS_LOADING);

    const _rev = router?.query?.rev[0];

    const pageData = experience[_rev];

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
