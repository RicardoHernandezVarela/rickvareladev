import { useEffect, useState } from "react";
import useSanityDataStore from "../store/useSanityDataStore";

import requestStatus from "../constants/requestStatus";

const sanityItems: Record<string, string> = {
  "work-experience": "/api/get-work-experience",
  vinyl: "/api/sanity/get-vinyls",
  project: "/api/sanity/get-projects",
  "teaching-resources": "/api/sanity/get-teaching-resources",
};

function useSanityData(props: { dataItem: string }) {
  const { dataItem } = props;

  const sanityData = useSanityDataStore((state: any) => state.sanityData);
  const insertSanityData = useSanityDataStore(
    (state: any) => state.insertSanityData
  );

  const [status, setStatus] = useState(requestStatus.IDLE);
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    setStatus(requestStatus.IS_LOADING);

    const storedData = sanityData[dataItem];

    if (storedData) {
      setData(storedData);

      setStatus(
        storedData ? requestStatus.HAS_SUCCESS : requestStatus.HAS_ERROR
      );

      return;
    }

    const response = await fetch(sanityItems[dataItem]);

    const responseJSON = await response?.json();

    const workExpData = responseJSON?.data;

    setData(workExpData);

    /* STORE RESULT */
    if (workExpData) {
      insertSanityData(dataItem, workExpData);
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

export default useSanityData;
