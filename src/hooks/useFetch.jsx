import { useEffect, useState } from "react";
import axios from "axios";

function useFetch() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipes() {
      try {
        const res = await axios.get("https://dummyjson.com/recipes");
        setData(res);
        setIsLoading(false);
        console.log(res.data);
      } catch (err) {
        setError(err)
        console.error("Error fetching data:", err);
      }
    }

    getRecipes();
  }, []);

  return { data, isLoading, error };
}

export default useFetch;
