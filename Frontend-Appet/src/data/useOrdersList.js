import useSWR from 'swr';
import API from './index';

export const useOrdersList = () => {
    const { data, error, mutate } = useSWR( '/orders', API.fetcher );

    return {
        services: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};//consulta y list de los serv
