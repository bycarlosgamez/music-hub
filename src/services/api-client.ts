import axios from 'axios';

const clientId = import.meta.env.VITE_CLIENT_ID;

const apiClient = (
  method: string,
  extraParams: Record<string, string> = {},
  signal?: AbortSignal
) => {
  return axios.get('https://ws.audioscrobbler.com/2.0/', {
    params: {
      method,
      api_key: clientId,
      format: 'json',
      ...extraParams,
    },
    signal,
  });
};

export default apiClient;
