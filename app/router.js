'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, getAlias, controller } = app;

  getAlias('/cnn/share/:id', controller.cnn.shareArticle.getData);

  router.get('/', controller.home.index);
};
