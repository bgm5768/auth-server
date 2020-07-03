import express from 'express';
import configs from './config/index';
import initAppLoader from './loaders/index.js';

const app = express();
const serverConfig = configs.server;

const defaultServerPort = 4000;
const server_port = serverConfig.auth_server_port ? serverConfig.auth_server_port : defaultServerPort

initAppLoader(app)

app.listen(server_port , () => {
    console.log("server port : " + server_port )
    console.log("successfully server started")
})