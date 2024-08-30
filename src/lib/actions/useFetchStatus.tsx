import { url } from "@/global";
import axios from "axios";
import { useEffect, useState } from "react";

const useFetchStatus = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchStatus();
  }, []);

  return { data };
};

export default useFetchStatus;
