import models from '../models/index';

const userModel = models.getUserModel();

export default {

    fetch : function(params) {
        return userModel.findAll();
    } ,
    signup : function(params) {
        // will hash
        params.password_salt = '123456'
        return userModel.create(params);
    },
    modify : function(params) {
        console.log("userService modify!")
    } ,
    delete : function(params) {
        console.log("userService delete!")
    } ,

}