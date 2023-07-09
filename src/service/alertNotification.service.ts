import ServiceMonitor from "../db/models/serviceMonitor";
import { ServiceMonitorInterface } from "../db/models/interfaces";

export const createAlert = async (createAlert: ServiceMonitorInterface) => {

  const {
		alertMessage,
		serviceIdentifier,
		alertTime,
	} = createAlert;

  return ServiceMonitor.create({
    alertMessage,
		serviceIdentifier,
		alertTime,
		state: 'unHealthy',
  })

	/*
	We will implement a cron based solution here for 15 min check of alert services for each alert
	*/
};

export const getAlerts = async () => {
	return ServiceMonitor.findAll();
}

export const getAlertByID = async (id: number) => {
	return ServiceMonitor.findByPk(id);
}

export const sendNotifications = async (alertData: any) => {
	// Send Email + Phone Notification from here
}

export const updateAlert = async(updateData: any) => {
	// check the system health status and update the alert accordingly 
}