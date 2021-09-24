import useSwr from "swr";
import { api } from "../configs/axios";

const useFetch = (url: string) => {
  const { data, error } = useSwr(
    [url],
    async (url) => {
      const response = await api.get(url);
      return response.data;
    },
    {
      refreshInterval: 60000,
      revalidateOnReconnect: true,
    }
  );
  return { data, error };
};

export { useFetch };
