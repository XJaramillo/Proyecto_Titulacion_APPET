
import useSWR from 'swr';
import API from './index';

export const useService = (id, options= {} ) => {
  const { data, error } = useSWR( `/services/${ id }`, API.fetcher, options );

  return {
    service: data && data.data,
    isLoading: !error && !data,
    isError: error
  };
};
