// import { somethingWentWrong } from "../../services/common.service";

// User Controllers
import {
	serviceMonitorAlertPost,
	serviceMonitorAlertPut,
	serviceMonitorAlertGet,
	serviceMonitorAlertGetByID,
} from "../controllers/alertNotification";


export = (router: any) => {
	try {
		console.info("---- Usersroutes ----");

		router
			.get("/alertService", serviceMonitorAlertGet)
			.post("/alertService", serviceMonitorAlertPost)
			// .delete("/users", verify, deleteUser);

		router.get('/alertServiceid/{id}', serviceMonitorAlertGetByID)

		// router.post("/update-password", verify);
	} catch (e) {
		console.error({ e });
		// router.redirect("/error", somethingWentWrong);
	}
};
