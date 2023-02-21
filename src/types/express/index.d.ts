import express from "express";

declare global {
    namespace Express {
        interface Request {
            context: {
                models: any,
                me: any,
            }
        }
    }
}