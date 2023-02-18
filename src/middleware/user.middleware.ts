import { Context, Next } from 'koa';

const verifyUser = async (ctx: Context, next: Next) => {
  console.log('请求获取用户信息接口');
  await next();
};

export { verifyUser };
