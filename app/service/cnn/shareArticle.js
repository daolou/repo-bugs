'use strict';

const Service = require('egg').Service;

class ShareArticleService extends Service {
  async getData(id) {
    console.log(id);
    return await { msg: 'ok', id };
  }
}

module.exports = ShareArticleService;
