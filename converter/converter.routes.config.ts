import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';

export class ConverterRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ConverterRoutes');
    }

    configureRoutes()   {
        //Create routes that dont require converter id
        this.app.route(`/converters`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(`List of converters`);
        })
        .post((req: express.Request, res: express.Response) => {
            res.status(200).send(`Post to converters`);
        });

        //Routes for converters where id is required
        this.app.route(`/converters/:converterId`)
        .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
            // this middleware function runs before any request to /users/:userId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
        })
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(`GET requested for id ${req.params.converterId}`);
        })
        .put((req: express.Request, res: express.Response) => {
            res.status(200).send(`PUT requested for id ${req.params.converterId}`);
        })
        .patch((req: express.Request, res: express.Response) => {
            res.status(200).send(`PATCH requested for id ${req.params.converterId}`);
        })
        .delete((req: express.Request, res: express.Response) => {
            res.status(200).send(`DELETE requested for id ${req.params.converterId}`);
        });

        return this.app;
    }

}