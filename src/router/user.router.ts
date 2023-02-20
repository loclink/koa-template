import Router from 'koa-router';
import { userInfo } from '../controller/user.controller';
import { verifyUser } from '../middleware/user.middleware';

const userRouter = new Router({ prefix: '/user' });

/**
 * @api {get} /user 用户信息
 * @apiName 用户信息
 * @apiGroup 用户
 * @apiDescription 返回用户详细信息
 * @apiSuccess {Number} code 200
 * @apiSuccess {Object} data 用户信息
 * @apiSuccessExample {type} Response-Example:
 * {
 *  code: 200,
 *  data: {
 *    name: '',
 *    age: '',
 *    sex: '',
 *    ...
 *  }
 * }
 *
 */
userRouter.get('/', verifyUser, userInfo);

export default userRouter;
