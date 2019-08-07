'use strict';

module.exports = {
  getAlias(path, controller) {
    this.router.get(path, controller);
    this.router.get(`${path}/`, controller);
    this.router.get(`${path}/index.html`, controller);
  },
};
