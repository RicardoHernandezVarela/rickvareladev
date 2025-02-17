import { useEffect, useState } from "react";
import requestStatus from "../../../../constants/requestStatus";

function useWorkExperience() {
  const [status, setStatus] = useState(requestStatus.IDLE);
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    setStatus(requestStatus.IS_LOADING);

    const response = await fetch("/api/get-work-experience");

    const responseJSON = await response?.json();

    setData(responseJSON?.data);
    setStatus(
      responseJSON?.data ? requestStatus.HAS_SUCCESS : requestStatus.HAS_ERROR
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
