"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// common functions
const common_service_1 = require("../service/common.service");
// routes
const alertNotification_routes_1 = __importDefault(require("./api-routes/alertNotification.routes"));
let router;
try {
    const date = new Date();
    console.info({ date });
    console.info("---- Routes ----");
    // Defining Router
    router = (0, express_1.Router)();
    //  ------- Setting Routes and calling necessary controllrers ------- //
    (0, alertNotification_routes_1.default)(router);
}
catch (e) {
    console.error({ e });
    router.get("/error", common_service_1.somethingWentWrong);
}
exports.default = router;
