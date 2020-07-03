import getUserRouterV1 from './routes/v1/user.js';
import getAuthRouterV1 from './routes/v1/auth.js';
import express from 'express';

export default () => {
    const mainRouter = express.Router();
    mainRouter.use('/v1' , getUserRouterV1())
    mainRouter.use('/v1' , getAuthRouterV1())

    return mainRouter;
}