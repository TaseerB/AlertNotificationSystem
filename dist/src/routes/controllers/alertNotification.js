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
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceMonitorAlertPut = exports.serviceMonitorAlertGetByID = exports.serviceMonitorAlertGet = exports.serviceMonitorAlertPost = void 0;
const alertNotification_service_1 = require("../../service/alertNotification.service");
const serviceMonitorAlertPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.info('-- Service Monitor Alert Posting --');
        const newAlert = req === null || req === void 0 ? void 0 : req.body;
        const alert = yield (0, alertNotification_service_1.createAlert)(newAlert);
        const sendNotification = yield (0, alertNotification_service_1.sendNotifications)(alert);
        // We will use AWS-SQS service for 15 min time check whenever an alert will be generated
        // we will push data to SQS to hit our route after 15 to check for 
        res.status(201).send({
            message: 'Alert Notification sent'
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.serviceMonitorAlertPost = serviceMonitorAlertPost;
const serviceMonitorAlertGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.info('-- Service Monitor Alert Get --');
        const alerts = yield (0, alertNotification_service_1.getAlerts)();
        res.status(200).send(alerts);
    }
    catch (err) {
        console.error(err);
    }
});
exports.serviceMonitorAlertGet = serviceMonitorAlertGet;
const serviceMonitorAlertGetByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const alert = yield (0, alertNotification_service_1.getAlertByID)(id);
});
exports.serviceMonitorAlertGetByID = serviceMonitorAlertGetByID;
const serviceMonitorAlertPut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.info('-- Service Monitor Alert Updating --');
    // This route will be hit from SQS after every 15 min to check system 
    // Health state and update the alert notification accordingly 
    const newAlert = req === null || req === void 0 ? void 0 : req.body;
    const alert = yield (0, alertNotification_service_1.updateAlert)(newAlert);
    res.status(200).send('Updated');
});
exports.serviceMonitorAlertPut = serviceMonitorAlertPut;
