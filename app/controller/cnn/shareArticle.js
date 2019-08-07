'use strict';

const Controller = require('egg').Controller;

class ShareArticleController extends Controller {
  constructor(props) {
    super(props);
    this.service = this.ctx.service.cnn.shareArticle;
  }
  async getData() {
    try {
      const { ctx } = this;
      const id = ctx.params;
      console.log(ctx.params[0], ctx.params[1]);
      console.log('id:', id);
      const res = await this.service.getData(id);
      console.log(res);
      await ctx.render('index.njk', { data: res });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ShareArticleController;
