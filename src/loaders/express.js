import getMainRouter from '../api'
import express from 'express';

export default ( app ) => {

    app.use(express.json())
    app.use(express.urlencoded( {extended : false } ));
    
    app.use('/api' , getMainRouter());
    
    app.get('/ping' , function (req , res , next) {
        res.status(200).end();
    });
}