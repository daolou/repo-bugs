'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = {};

  /**
   * @member Config#security
   * @property {String} csrf - session&cookie csrf
   */
  config.security = {
    csrf: {
      useSession: true,
      cookieName: 'csrfToken',
      sessionName: 'csrfToken',
    },
  };
  config.logger = {
    dir: `/var/nodejs/logs/${appInfo.name}`,
    level: 'DEBUG',
  };

  return config;
};
