/**
 * Created by chalosalvador on 8/18/20
 */
import useSWR from 'swr';
import API from './index';

export const useServiceOrders = (id ) => {
  const { data, error, mutate } = useSWR( () => `/services/${ id }/orders`, API.fetcher );
  return {
    orders: data && data.data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};
