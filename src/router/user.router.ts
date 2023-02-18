import Router from 'koa-router';
import { userInfo } from '../controller/user.controller';
import { verifyUser } from '../middleware/user.middleware';

const userRouter = new Router({ prefix: '/user' });

userRouter.get('/', verifyUser, userInfo);

export default userRouter;
