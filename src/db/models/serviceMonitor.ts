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
		state: {
			type: DataTypes.STRING,
		},
		alertMessage: {
			type: DataTypes.STRING,
		},
		serviceIdentifier: {
			type: DataTypes.STRING,
		},
    alertTime: {
			allowNull: true,
			type: DataTypes.DATE,
		},
	},
	{
		sequelize,
		modelName: "ServiceMonitors",
	}
);


export default ServiceMonitor;
