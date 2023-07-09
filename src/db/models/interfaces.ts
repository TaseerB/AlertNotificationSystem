/**
 * Making Interfaces for generic use throughout the app
 */

export interface ServiceMonitorInterface {
	alertMessage: string;
	serviceIdentifier: string;
	alertTime: Date;
	state: string;
	createdBy: string;
	updatedBy: string;
}

export interface UserInterface {
	role: "admin" | "user";
	firstName: string;
	lastName: string;
	email: string;
	password: string | null;
	state: "verified" | "un-verified";
	authType: "system" | "google";
}

