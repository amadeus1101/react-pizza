import { useState, useEffect } from "react";

export function useFetch(url, category, sort) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(deps[0] !== 0 ? url + "?category=" + deps[0] : url)
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
  }, [category, sort]);

  return [data, loading, error];
}
