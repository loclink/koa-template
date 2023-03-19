import fs from 'fs';
import path from 'path';
import type { IncomingMessage } from 'http';
import type { Http2ServerRequest } from 'http2';
import type Koa from 'koa';
import type { Context, Next } from 'koa';
import type Router from 'koa-router';
import type { ErrorType, SuccessType } from '../types';

// 自动注册路由
const autoRegisterRouter = (app: Koa, dir = '../router') => {
  const routerDir = path.resolve(__dirname, dir);
  fs.readdirSync(routerDir).forEach((file) => {
    if (fs.lstatSync(path.resolve(routerDir, file)).isDirectory()) {
      autoRegisterRouter(app, path.resolve(routerDir, file));
    } else {
      const router: { default: Router } = require(path.join(routerDir, file));
      if (!router.default) return;
      app.use(router.default.routes());
      app.use(router.default.allowedMethods());
    }
  });
};

const getIP = (req: IncomingMessage | Http2ServerRequest) => {
  return (
    (req.headers['x-forwarded-for'] as string) || // 判断是否有反向代理 IP
    req.connection.remoteAddress || // 判断 connection 的远程 IP
    req.socket.remoteAddress || // 判断后端的 socket 的 IP
    req.connection.remoteAddress
  );
};

/**
 * 处理请求成功返回信息
 * @param successInfo
 * @param ctx
 */
export const successHandler = (successInfo: SuccessType, ctx: Context) => {
  successInfo.code = 200;
  ctx.body = successInfo;
};

/**
 * 错误处理
 * @param error
 * @param ctx
 */
export const errorHandler = (error: ErrorType, ctx: Context) => {
  ctx.body = {
    code: error.code ?? 500,
    message: error.message
  };
};

/**
 * 全局中间件
 * @param app
 * @returns
 */
function registerGlobalMiddleware(app: Koa) {
  // 监听处理错误
  app.on('error', errorHandler);

  // 监听处理成功
  app.on('success', successHandler);

  // 全局方法：提交错误
  app.context.emitError = function (this: Context, errorInfo: ErrorType) {
    this.throw(errorInfo);
  };

  // // 全局方法：提交成功
  app.context.success = function (this: Context, message: string, data: object) {
    const successInfo = { message, data };
    app.emit('success', successInfo, this);
  };

  // 全局方法：获取当前的一些状态
  app.context.currentState = function (this: Context) {
    const ip = getIP(this.req);
    const date = new Date().getTime() / 1000;
    return { ip, date };
  };

  // 全局中间件
  return async function (ctx: Context, next: Next) {
    // 捕获到异常后提交errorHandle
    try {
      await next();
    } catch (error) {
      ctx.app.emit('error', error, ctx);
    }
  };
}

export { autoRegisterRouter, registerGlobalMiddleware };
