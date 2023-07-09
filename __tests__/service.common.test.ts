import request from "supertest";
import { createServer } from "../src/utils/server";
import { responseArray } from '../utils/test.utils';

let app = createServer();

describe("Users", () => {

	describe("POST /alertService", () => {
		test("successfull Creation should return ", async () => {
			const result = await request(app)
				.post("/alertService")
				.send({
          "alertMessage": "test",
          "serviceIdentifier": "test 123",
          "alertTime" : "2023-07-09T11:17:57.476Z"
				})
				.set("Accept", "application/json");

			// const result = JSON.parse(token.text);
			console.info({ check: result });

			expect(result).toBe({"message": "Alert Notification sent"});
		});
	});

  describe("GET /alertService", () => {
		test("alertService get should return array of alertService", async () => {
			const users = await request(app)
				.get("/users")
				.set("Accept", "application/json");
			const usersResponse = JSON.parse(users.text);
			expect(usersResponse.response[0]).toEqual(responseArray);
		});
	});


});