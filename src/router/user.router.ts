import Router from 'koa-router';
import { userInfo } from '../controller/user.controller';

const userRouter = new Router({ prefix: '/user' });


userRouter.get('/', userInfo);

export default userRouter;
