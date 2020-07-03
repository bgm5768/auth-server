import settingRoute from './express.js';
import generateDatabase from './database.js';
import configs from '../config/index';

export default (expressApp) => {
    generateDatabase(configs.sqlite);
    settingRoute(expressApp);
}