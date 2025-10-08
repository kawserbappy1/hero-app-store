import axios from "axios";
import { useEffect, useState } from "react";

const useLoadApp = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("../AppData.json")
      .then((data) => setAppData(data.data))
      .catch((err) => setError(err))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      );
  }, []);

  return { appData, loading, error };
};

export default useLoadApp;
