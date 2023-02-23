import express from "express";

declare global {
    namespace Express {
        interface Request {
            // the Express.Request interface is extended to include a new property called context. 
            // The Request object in the express library has an existing context property that is a plain object. The context property is used to pass data from the middleware to the resolvers. 
            context: {
                models: any,
                me: any,
            }
        }
    }
}