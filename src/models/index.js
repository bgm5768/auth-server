import userModel from './user';

export default {

    getUserModel: () => {
        userModel.sync()
        return userModel;
    }

}