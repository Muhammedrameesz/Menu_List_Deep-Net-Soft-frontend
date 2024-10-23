import axios from "axios";
import { baseApiUrl } from "../baseApiUrl/baseApiUrl";
import { useEffect, useState } from "react";

const useGetCoktails = () => {
  const [coktails, setCoktails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMenuList = async () => {
      try {
        const result = await axios.get(`${baseApiUrl}/api/v1/coktails`);
        console.log(result.data);
        setCoktails(result.data);
      } catch (error) {
        const errorMessage =
          error?.response?.data?.message || "Failed to fetch data";
        console.log(errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    getMenuList();
  }, []);

  return { coktails, error, loading };
};

export default useGetCoktails;
