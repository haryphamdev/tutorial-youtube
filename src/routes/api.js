import express from "express";

let router = express.Router();

let initAPIRoutes = (app) => {
    // router.get("/a");

    return app.use("/api/v1/", router);
};
module.exports = initAPIRoutes;
