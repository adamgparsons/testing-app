import { useEffect, useState } from "react";

function DataFetch(url) {
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(true);
  const [fetchedData, setFetchedData] = useState("");
  useEffect(() => {
    const fetchContent = async () => {
      fetch(url).then((response) => {
        if (response.status === 200) {
          return response
            .json()
            .then((result) => {
              setStatus(false);
              setFetchedData(result);
            })
            .catch((error) => {
              setError(true);
              setStatus(false);
            });
        } else {
          console.log("An error has occurred");
        }
      });
    };
    fetchContent();
  }, [url]);
  return {
    data: fetchedData,
    status: status,
    isError: error,
  };
}

export default DataFetch;
