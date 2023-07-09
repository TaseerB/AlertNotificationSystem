import { Request, Response } from "express";
import { createAlert } from "../../service/alertNotification.service";


export const serviceMonitorAlertPost = async (req: Request, res: Response) => {
  console.info ('-- Service Monitor Alert Posting --');

  const newAlert = req?.body;

	console.info({ newAlert });

  const alert = await createAlert(newAlert);

}