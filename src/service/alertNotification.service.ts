import ServiceMonitor from "../db/models/serviceMonitor";
import { ServiceMonitorInterface } from "../db/models/interfaces";

export const createAlert = async (createAlert: ServiceMonitorInterface) => {
	console.info({ createAlert });

  return ServiceMonitor.create({createAlert})
};