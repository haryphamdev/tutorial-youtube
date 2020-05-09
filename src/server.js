require('dotenv').config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initAPIRoutes from "./routes/api";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';

let app = express();

app.use(cookieParser('secret'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);

initWebRoutes(app);
initAPIRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Doctor Appointment Booking System app is listening on port ${port}!`));
