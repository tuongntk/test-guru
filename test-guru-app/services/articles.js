
import axios from 'axios';
import { useApiHandler, fetcher } from 'services';
import useSWR from 'swr';

const createArticle = data => axios.post('/api/v1/articles', data);
const updateArticle = (id, data) => axios.patch(`/api/v1/articles/${id}`, data);

export const useCreateArticle = () => useApiHandler(createArticle);
export const useUpdateArticle = () => useApiHandler(updateArticle);

export const useGetArticle = id => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/articles/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest };
}

export const useGetUserArticles = () => {
  const { data, error, ...rest } = useSWR(`/api/v1/articles/me`, fetcher);
  return { data, error, loading: !data && !error, ...rest };
}

