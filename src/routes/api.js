import express from "express";
import homeController from "./../controllers/homeController";

let router = express.Router();

let initAPIRoutes = (app) => {
    router.get("/test", homeController.handleWebTestApi);

    return app.use("/api/v1/", router);
};
module.exports = initAPIRoutes;
