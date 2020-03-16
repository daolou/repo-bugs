import { defineConfig } from 'umi';
import workboxWebpackPlugin from 'workbox-webpack-plugin';

export default defineConfig({
  chainWebpack(config, { webpack }) {
    config
      .merge({})
      .plugin('workbox')
      .use(workboxWebpackPlugin['GenerateSW'], [
        {
          clientsClaim: true,
          skipWaiting: true,
        },
      ]);
  },
});
