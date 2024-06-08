import { useState, useEffect } from "react";

const BASE_URL = "https://63fe15b61626c165a0a7034c.mockapi.io/pizzas";

export function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("An error occured. Awkward...");
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
