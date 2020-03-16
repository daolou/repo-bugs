import { request } from 'umi';
import skipRequest from '@/lib/request';

export default {
  SILENT: (params?: any)=>{
    return request(`/api/test`,{
      method: 'get',
      params
    })
  },
  skipErrorRequest: (params?: any)=>{
    return skipRequest(`/api/test`,{
      method: 'get',
      params
    })
  }
}
