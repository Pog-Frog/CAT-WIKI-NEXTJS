import {GET_ALL_CAT_BREEDS} from "@/endpoints/catBreeds.endpoint";
import useSWR from 'swr';
import axios from 'axios';

const useCats = () => { 
  const fetcher = (url: string) => axios.get(url).then(res => res.data);
  const { data, error, isLoading, mutate } = useSWR(GET_ALL_CAT_BREEDS, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    };
}

export default useCats;