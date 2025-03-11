import { useEffect, useState } from "react";
import useExperienceStore from "../../../../store/useExperienceStore";
import requestStatus from "../../../../constants/requestStatus";

function useWorkExperience() {
  const experience = useExperienceStore((state: any) => state.experience);
  const setExperience = useExperienceStore((state: any) => state.setExperience);

  const [status, setStatus] = useState(requestStatus.IDLE);
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    setStatus(requestStatus.IS_LOADING);

    const response = await fetch("/api/get-work-experience");

    const responseJSON = await response?.json();

    const workExpData = responseJSON?.data;

    setData(workExpData);

    /* STORE RESULT */
    if (workExpData) {
      const workExpDataObj: any = {};

      workExpData.map((item: any) => {
        workExpDataObj[item?._rev] = item;
      });

      setExperience(workExpDataObj);
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
