import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useSanityData from "@/src/hooks/useSanityData";

import requestStatus from "../constants/requestStatus";

function useAlbumReview() {
  const router = useRouter();

  const [review, setReview] = useState({
    name: "",
  });

  const { data, status } = useSanityData({ dataItem: "vinyl" });

  const getData = async () => {
    if (!router?.query?.rev || status !== requestStatus.HAS_SUCCESS) return;

    const _rev = router?.query?.rev[0];

    const pageData = data.find((experience: any) => experience?._rev === _rev);

    setReview(pageData);
  };

  useEffect(() => {
    getData();
  }, [router?.query, status]);

  return {
    status,
    review,
  };
}

export default useAlbumReview;
