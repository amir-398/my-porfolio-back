"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const adminRoute = require("./routes/adminRoute");
const projectRoute = require("./routes/projectRoute");
const swaggerDocs = require("./swaggerOptions");
dotenv_1.default.config();
const app = express();
app.use(cookieParser());
app.use(cors());
const port = "4000";
// app use swagger api documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const infoRoute = require("./routes/infoRoute");
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// const infoRoute = require("./routes/infoRoute");
// const adminRoute = require("./routes/adminRoute");
mongoose.connect(process.env.MONGO_URI || "");
app.use(express.urlencoded());
app.use(express.json());
app.use("/projects", projectRoute);
app.use("/infos", infoRoute);
app.use("/", adminRoute);
// app.use("/", sendEmailRoute);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
