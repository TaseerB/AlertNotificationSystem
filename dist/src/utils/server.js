"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("../routes/routes"));
const createServer = () => {
    const app = (0, express_1.default)();
    // Parsing Body Params
    app.use(body_parser_1.default.json());
    // Calling Routes
    app.use(routes_1.default);
    return app;
};
exports.createServer = createServer;
