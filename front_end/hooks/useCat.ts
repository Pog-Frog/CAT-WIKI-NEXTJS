import { GET_CAT_BREED_BY_ID } from "@/endpoints/catBreeds.endpoint";
import useSWR from 'swr';
import axios from 'axios';

const useCat = (id: string) => { 
  const fetcher = (url: string) => axios.get(url).then(res => res.data);
  
  const url = `${GET_CAT_BREED_BY_ID}${id}`;

    const { data, error, isLoading, mutate } = useSWR(url, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    };
}

export default useCat;