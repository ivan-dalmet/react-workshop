import { useQuery, queryCache, useMutation } from 'react-query';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/core';
import { reactQueryConfig } from '../config/axios';

reactQueryConfig();

const API_PATH = 'https://api.thecatapi.com/v1';

export const useCat = (catId, options = {}) => useQuery(
  ['cat', catId],
  () => axios.get(`${API_PATH}/images/${catId}`),
  {
    retry: 1,
    ...options,
  },
);

export const useAddCat = (options = {}) => {
  const history = useHistory();
  const toast = useToast();
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
        toast({
          title: 'Upload succeeded',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-left',
        });
        history.push('/');
      },
      onError: (error) => {
        toast({
          title: 'Upload failed',
          description: error?.response?.data?.message,
          status: 'error',
          duration: null,
          isClosable: true,
          position: 'top-left',
        });
      },
      ...options,
    },
  );
};

export const useCats = (options = {}) => {
  return useQuery(
    'cats',
    () => axios.get(`${API_PATH}/images/search?limit=12&order=RANDOM&size=small`),
    {
      staleTime: Infinity,
      onSuccess: (cats) => {
        (cats || []).forEach((cat) => {
          queryCache.setQueryData(['cat', cat.id], (data) => data ?? cat);
        });
        if (options.onSuccess) {
          options.onSuccess();
        }
      },
      ...options,
    },
  );
};
