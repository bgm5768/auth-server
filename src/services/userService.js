import models from '../models/index';

const userModel = models.getUserModel();

export default {

    fetch : (params) => {
        return userModel.findAll();
    } ,
    signup : (params) => {
        params.password_salt = '123456'
        return userModel.create(...params);
    },
    modify : (params) => {
        console.log("userService modify!")
    } ,
    delete : (params) => {
        console.log("userService delete!")
    } ,

    login : (params) => {

    }

}