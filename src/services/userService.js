import models from '../models/index';

const userModel = models.getUserModel();

export default {

    fetch : (params) => {
        return userModel.findAll();
    } ,
    signup : (params) => {
        params.password_salt = '123456'

        /*
            will be user insert password hash logic add

            auth.db . user table

            user_id 
            password
            password_salt 


         */

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