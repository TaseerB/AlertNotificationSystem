import { Router } from "express";

// common functions
import { somethingWentWrong } from "../service/common.service";

// routes
import alertService from "./api-routes/alertNotification.routes";


let router: any;

try {
	const date = new Date();
	console.info({ date });
	console.info("---- Routes ----");

	// Defining Router
	router = Router();

	//  ------- Setting Routes and calling necessary controllrers ------- //
	alertService(router);


} catch (e) {
	console.error({ e });
	router.get("/error", somethingWentWrong);
}

export default router;
