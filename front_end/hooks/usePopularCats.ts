import {GET_POPULAR_CAT_BREEDS} from "@/endpoints/catBreeds.endpoint";
import useSWR from 'swr';
import axios from 'axios';

const usePopularCats = () => { 
  const fetcher = (url: string) => axios.get(url).then(res => res.data);
  const { data, error, isLoading, mutate } = useSWR(GET_POPULAR_CAT_BREEDS, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    };
}

export default usePopularCats;