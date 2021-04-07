import useSWR from 'swr';
import API from './index';

export const useServicesList = () => {
  const { data, error, mutate } = useSWR( '/services', API.fetcher );

  return {
    services: data && data.data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};//consulta y list de los serv
