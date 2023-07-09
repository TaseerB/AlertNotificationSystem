import { Request, Response } from "express";
import { createAlert, sendNotifications, getAlerts, getAlertByID, updateAlert } from "../../service/alertNotification.service";


export const serviceMonitorAlertPost = async (req: Request, res: Response) => {
  try {
    console.info ('-- Service Monitor Alert Posting --');

    const newAlert = req?.body;

    const alert = await createAlert(newAlert);

    const sendNotification = await sendNotifications(alert);

    // We will use AWS-SQS service for 15 min time check whenever an alert will be generated
    // we will push data to SQS to hit our route after 15 to check for 

    res.status(201).send({
      message: 'Alert Notification sent'
    });
  } catch (err) {
    console.error(err);
  }

}

export const serviceMonitorAlertGet = async (req: Request, res: Response) => {

  try {
    console.info ('-- Service Monitor Alert Get --');

    const alerts = await getAlerts();

    res.status(200).send(alerts);
  } catch (err) {
    console.error(err);
  }

}

export const serviceMonitorAlertGetByID = async (req: Request, res: Response) => {

  const id: any = req.query.id;

  const alert = await getAlertByID(id);

}

export const serviceMonitorAlertPut = async (req: Request, res: Response) => {
  console.info ('-- Service Monitor Alert Updating --');

  // This route will be hit from SQS after every 15 min to check system 
  // Health state and update the alert notification accordingly 

  const newAlert = req?.body;

  const alert = await updateAlert(newAlert);

  res.status(200).send('Updated');
}