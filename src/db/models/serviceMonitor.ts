"use strict";
import sequelize from "../config/db";
import { Model, DataTypes } from "sequelize";

class ServiceMonitor extends Model {
	declare id: number;
	declare alertMessage: string;
	declare serviceIdentifier: string;
  declare alertTime: Date;
  declare createdBy: string;
  declare updatedBy: string;
}

ServiceMonitor.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		alertMessage: {
			type: DataTypes.STRING,
		},
		serviceIdentifier: {
			type: DataTypes.STRING,
		},
    alertTime: {
			type: DataTypes.DATE,
		},
    createdBy: {
			type: DataTypes.STRING,
		},
    updatedBy: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: "service_monitor",
	}
);


export default ServiceMonitor;
