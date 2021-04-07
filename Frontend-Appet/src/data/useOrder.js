import useSWR from 'swr';
import API from './index';

export const useOrder = (id, options= {} ) => {
    const { data, error } = useSWR( `/orders/${ id }`, API.fetcher, options );

    return {
        service: data && data.data,
        isLoading: !error && !data,
        isError: error
    };
};