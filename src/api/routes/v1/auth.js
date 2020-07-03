import express from 'express';

//인증(Authentication), 권한부여(Authorization), 접근제어(Access Control)

export default () => {
    const authRouter = express.Router();

    authRouter.post('/login' , function (req, res, next) {
        res.json({"msg":"login"})
      });

    return authRouter;
}