import express from "express";
import homeController from "./../controllers/homeController";
import chatFacebookController from "./../controllers/chatFacebookController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.handleWebHelloWorld);
    router.post("/webhook", chatFacebookController.postWebHook);
    router.get("/webhook", chatFacebookController.getWebHook);
    return app.use("/", router);
};
module.exports = initWebRoutes;
