import express from 'express';
import userService from '../../../services/userService';

export default () => {
    const userRouter = express.Router();

    userRouter.route('/user')
    .get(function (req, res, next) {
        userService.fetch().then(value => {
            res.json({"messages":value})
        });
    }) // select user account info 
    .post(function (req, res, next) {
        userService.signup(req.body).then((ret) => {
            res.status(201).json({"messages": "thank for join us "+ret.userid});
        }).catch((ret) => {
            res.status(406).json({"messages":ret.errors[0].message});
        });
    }) // insert user account   
    .put(function (req, res, next) {
        userService.modify();

        res.json({"msg":"patch"})
    }) // update user account info
    .delete(function (req, res, next) {
        userService.delete();
        
        res.json({"msg":"delete"})
    }) // delete user account 

    return userRouter;
}