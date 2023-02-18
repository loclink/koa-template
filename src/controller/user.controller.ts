import type { Context } from 'koa';

const userInfo = (ctx: Context) => {
  ctx.success('获取用户数据成功');
};

export { userInfo };
