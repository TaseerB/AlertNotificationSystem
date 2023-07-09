// import { somethingWentWrong } from "../../services/common.service";

// User Controllers
import {
	serviceMonitorAlertPost
} from "../controllers/alertNotification";


export = (router: any) => {
	try {
		console.info("---- Usersroutes ----");

		router
			// .get("/users", getUsers)
			.post("/alertService", serviceMonitorAlertPost)
			// .delete("/users", verify, deleteUser);

		// router.post("/update-password", verify);
	} catch (e) {
		console.error({ e });
		// router.redirect("/error", somethingWentWrong);
	}
};
