"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../src/utils/server");
const test_utils_1 = require("../utils/test.utils");
let app = (0, server_1.createServer)();
describe("Users", () => {
    describe("POST /alertService", () => {
        test("successfull Creation should return ", () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app)
                .post("/alertService")
                .send({
                "alertMessage": "test",
                "serviceIdentifier": "test 123",
                "alertTime": "2023-07-09T11:17:57.476Z"
            })
                .set("Accept", "application/json");
            // const result = JSON.parse(token.text);
            console.info({ check: result });
            expect(result).toBe({ "message": "Alert Notification sent" });
        }));
    });
    describe("GET /alertService", () => {
        test("alertService get should return array of alertService", () => __awaiter(void 0, void 0, void 0, function* () {
            const users = yield (0, supertest_1.default)(app)
                .get("/users")
                .set("Accept", "application/json");
            const usersResponse = JSON.parse(users.text);
            expect(usersResponse.response[0]).toEqual(test_utils_1.responseArray);
        }));
    });
});
