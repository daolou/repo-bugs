/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565148957294_7367';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: false,
  };

  config.view = {
    mapping: {
      '.njk': 'nunjucks',
    },
  };

  config.logger = {
    consoleLevel: 'DEBUG',
  };

  config.customLogger = {
    scheduleLogger: {
      consoleLevel: 'INFO',
      // file: path.join(appInfo.root, 'logs', appInfo.name, 'egg-schedule.log'),
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
