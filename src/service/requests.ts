import { AxiosResponse } from 'axios';
import {Client} from './instance';


export async function getRequest<T>(URL: string, params: object): Promise<AxiosResponse<T>> {
  const res: AxiosResponse<T> = await Client.get(URL, { params });
  return res;
}

export async function putRequest<T>(URL: string, params: object): Promise<AxiosResponse<T>> {
  const res: AxiosResponse<T> = await Client.put(URL, params );
  return res;
}

export async function postRequest<T>(URL: string, params: object): Promise<AxiosResponse<T>> {
  const res: AxiosResponse<T> = await Client.post(URL, params );
  return res;
}

