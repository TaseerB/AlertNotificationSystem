"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
const user_1 = __importDefault(require("./user"));
class Task extends sequelize_1.Model {
}
Task.init({
    taskId: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    taskName: {
        type: sequelize_1.DataTypes.STRING,
    },
    taskDetail: {
        type: sequelize_1.DataTypes.STRING,
    },
    attachment: {
        type: sequelize_1.DataTypes.STRING,
    },
    taskStatus: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["COMPLETED", "PENDING"],
    },
    completionTime: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    sequelize: db_1.default,
    modelName: "Tasks",
});
Task.belongsTo(user_1.default, {
    foreignKey: "userId",
    as: "User",
});
exports.default = Task;
