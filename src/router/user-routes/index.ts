import Router from 'koa-router';
import { userInfo } from '@/controller/user.controller';
import { verifyUser } from '@/middleware/user.middleware';

const userRouter = new Router({ prefix: '/user' });
/**
 * @swagger
 *
 * /user/:
 *   get:
 *     description: get all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: get all users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/authLogin"
 *
 */
userRouter.get('/', verifyUser, userInfo);

export default userRouter;
