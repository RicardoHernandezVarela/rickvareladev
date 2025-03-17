import { useEffect, useState } from "react";
import useExperienceStore from "../../../../store/useExperienceStore";
import useSanityDataStore from "../../../../store/useSanityDataStore";

import requestStatus from "../../../../constants/requestStatus";

function useWorkExperience() {
  const experience = useExperienceStore((state: any) => state.experience);
  const setExperience = useExperienceStore((state: any) => state.setExperience);

  const sanityData = useSanityDataStore((state: any) => state.sanityData);
  const insertSanityData = useSanityDataStore(
    (state: any) => state.insertSanityData
  );

  const [status, setStatus] = useState(requestStatus.IDLE);
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    setStatus(requestStatus.IS_LOADING);

    const dataId = "work-experience";
    const storedData = sanityData[dataId];

    if (storedData) {
      setData(storedData);

      setStatus(
        storedData ? requestStatus.HAS_SUCCESS : requestStatus.HAS_ERROR
      );

      return;
    }

    const response = await fetch("/api/get-work-experience");

    const responseJSON = await response?.json();

    const workExpData = responseJSON?.data;

    setData(workExpData);

    /* STORE RESULT */
    if (workExpData) {
      insertSanityData(dataId, workExpData);
    }

    setStatus(
      workExpData ? requestStatus.HAS_SUCCESS : requestStatus.HAS_ERROR
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    status,
    data,
  };
}

export default useWorkExperience;
