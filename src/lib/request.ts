import { request } from 'umi';
import {
  RequestOptionsWithResponse,
  RequestResponse,
  RequestOptionsWithoutResponse,
  RequestOptionsInit,
  RequestMethod,
} from 'umi-request';
interface RequestMethodInUmi<R = false> {
  <T = any>(
    url: string,
    options: RequestOptionsWithResponse & { skipErrorHandler?: boolean },
  ): Promise<RequestResponse<T>>;
  <T = any>(
    url: string,
    options: RequestOptionsWithoutResponse & { skipErrorHandler?: boolean },
  ): Promise<T>;
  <T = any>(
    url: string,
    options?: RequestOptionsInit & { skipErrorHandler?: boolean },
  ): R extends true ? Promise<RequestResponse<T>> : Promise<T>;
}
const skipErrorRequest: RequestMethodInUmi<false> = (
  url: any,
  options: any,
) => {
  return request(url, { ...options, skipErrorHandler: true });
};

export default skipErrorRequest;
