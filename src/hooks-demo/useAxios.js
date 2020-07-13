import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export const useAxios = (path, options = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const refetch = useCallback(() => {
    setLoading(true);
    axios.get(`https://api.thecatapi.com/v1/${path}`, options)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [path, JSON.stringify(options)]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    data, loading, error, refetch,
  };
};
