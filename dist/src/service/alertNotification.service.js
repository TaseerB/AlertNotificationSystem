"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAlert = exports.sendNotifications = exports.getAlertByID = exports.getAlerts = exports.createAlert = void 0;
const serviceMonitor_1 = __importDefault(require("../db/models/serviceMonitor"));
const createAlert = (createAlert) => __awaiter(void 0, void 0, void 0, function* () {
    const { alertMessage, serviceIdentifier, alertTime, } = createAlert;
    return serviceMonitor_1.default.create({
        alertMessage,
        serviceIdentifier,
        alertTime,
        state: 'unHealthy',
    });
    /*
    We will implement a cron based solution here for 15 min check of alert services for each alert
    */
});
exports.createAlert = createAlert;
const getAlerts = () => __awaiter(void 0, void 0, void 0, function* () {
    return serviceMonitor_1.default.findAll();
});
exports.getAlerts = getAlerts;
const getAlertByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return serviceMonitor_1.default.findByPk(id);
});
exports.getAlertByID = getAlertByID;
const sendNotifications = (alertData) => __awaiter(void 0, void 0, void 0, function* () {
    // Send Email + Phone Notification from here
});
exports.sendNotifications = sendNotifications;
const updateAlert = (updateData) => __awaiter(void 0, void 0, void 0, function* () {
    // check the system health status and update the alert accordingly 
});
exports.updateAlert = updateAlert;
