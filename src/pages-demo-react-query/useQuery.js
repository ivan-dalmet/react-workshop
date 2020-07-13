import { useEffect } from 'react';
import { useQuery, queryCache, useMutation } from 'react-query';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { reactQueryConfig } from '../config/axios';

reactQueryConfig();

const API_PATH = 'https://api.thecatapi.com/v1';

export const useCat = (catId, options = {}) => useQuery(
  ['cats', catId],
  () => axios.get(`${API_PATH}/images/${catId}`),
  {
    retry: 1,
    ...options,
  },
);

export const useAddCat = (options = {}) => {
  const history = useHistory();
  return useMutation(
    ({ catImage }) => {
      const formData = new FormData();
      formData.append('file', catImage.file);
      return axios.post(
        `${API_PATH}/images/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    },
    {
      onSuccess: () => {
        queryCache.invalidateQueries('cats');
        history.push('/');
      },
      ...options,
    },
  );
};

export const useCats = (options = {}) => {
  const query = useQuery(
    'cats',
    () => axios.get(`${API_PATH}/images/search?limit=12&order=RANDOM&size=small`),
    // () => axios.get(`${API_PATH}/images?limit=12&order=RANDOM&size=small`),
    {
      staleTime: Infinity,
      ...options,
    },
  );

  useEffect(() => {
    (query.data || []).forEach((cat) => {
      queryCache.setQueryData(['cat', cat.id], (data) => data ?? cat);
    });
  }, [query.data]);

  return query;
};
