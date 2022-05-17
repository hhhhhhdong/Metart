import http from './http';
import { fetcher } from './art';
import useSWR from 'swr';

export const getProfileAPI = (address) => {
  const { data, error } = useSWR(`/user/${address}`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const getGalleryArtAPI = (address) => {
  const { data, error } = useSWR(`/user/${address}/arts`, fetcher);

  return {
    data: data,
    artList: data && data.content,
    isLoading: !error && !data,
    isError: error,
  };
};

export const getGalleryBuyAPI = (address) => {
  const { data, error } = useSWR(`/user/${address}/my-arts`, fetcher);

  return {
    data: data,
    buyList: data && data.content,
    isLoading: !error && !data,
    isError: error,
  };
};
