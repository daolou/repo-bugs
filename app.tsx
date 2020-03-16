import { registerServiceWorker } from './registerServiceWorker';
import { RequestConfig, ErrorShowType } from 'umi';

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {
    adaptor: resData => {
      return {
        ...resData,
        showType: ErrorShowType.SILENT,
      };
    },
  },
  middlewares: [],
};
export function render(oldRender: Function) {
  oldRender();
  registerServiceWorker();
}
