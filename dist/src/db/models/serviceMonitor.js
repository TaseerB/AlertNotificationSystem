"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
class ServiceMonitor extends sequelize_1.Model {
}
ServiceMonitor.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
    },
    alertMessage: {
        type: sequelize_1.DataTypes.STRING,
    },
    serviceIdentifier: {
        type: sequelize_1.DataTypes.STRING,
    },
    alertTime: {
        allowNull: true,
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    sequelize: db_1.default,
    modelName: "ServiceMonitors",
});
exports.default = ServiceMonitor;
