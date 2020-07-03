import { useEffect } from 'react';
import { useQuery, queryCache } from 'react-query';
import axios from 'axios';
import { reactQueryConfig } from '../config/axios';

reactQueryConfig();

const API_PATH = 'https://api.thecatapi.com/v1';

export const useCat = (catId, options) => useQuery(
  ['cat', catId],
  () => axios.get(`${API_PATH}/images/${catId}`),
  {
    retry: 1,
    ...options,
  }
)

export const useCats = (options) => {
  const query = useQuery(
    'cats',
    () => axios.get(`${API_PATH}/images/search?limit=12&order=RANDOM&size=small`),
    {
      staleTime: Infinity,
      ...options,
    }
  );

  useEffect(() => {
    (query.data || []).forEach((cat) => {
      queryCache.setQueryData(['cat', cat.id], (data) => data ?? cat);
    });
  }, [query.data]);

  return query;
};