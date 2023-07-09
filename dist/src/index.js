"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import swaggerUi from "swagger-ui-express";
const helmet_1 = __importDefault(require("helmet"));
const server_1 = require("./utils/server");
// import swaggerDocument from "./swagger";
// Routes
const dotenv = __importStar(require("dotenv"));
dotenv.config();
let app = (0, server_1.createServer)();
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const port = process.env.PORT;
// const cookieKey: any = process?.env?.COOKIEKEY || "someSomeSome";
app.use((0, helmet_1.default)());
app.get("/index", (req, res) => {
    res.status(200).json({ message: "Hello There!" });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
app.get("/logout", (req, res) => {
    // cron.stop();
    res.status(200).json({ message: "logged out" });
});
