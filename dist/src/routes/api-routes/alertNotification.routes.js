"use strict";
// import { somethingWentWrong } from "../../services/common.service";
// User Controllers
const alertNotification_1 = require("../controllers/alertNotification");
module.exports = (router) => {
    try {
        console.info("---- Usersroutes ----");
        router
            .get("/alertService", alertNotification_1.serviceMonitorAlertGet)
            .post("/alertService", alertNotification_1.serviceMonitorAlertPost);
        // .delete("/users", verify, deleteUser);
        router.get('/alertServiceid/{id}', alertNotification_1.serviceMonitorAlertGetByID);
        // router.post("/update-password", verify);
    }
    catch (e) {
        console.error({ e });
        // router.redirect("/error", somethingWentWrong);
    }
};
