import axios from "axios";
import { baseApiUrl } from "../baseApiUrl/baseApiUrl";
import { useEffect, useState } from "react";

const useMenuList = () => {
  const [menuList, setMenuList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMenuList = async () => {
      try {
        const result = await axios.get(`${baseApiUrl}/api/v1/menuList`);
        setMenuList(result.data);
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

  return { menuList, error, loading };
};

export default useMenuList;
