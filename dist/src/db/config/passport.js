"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth_1 = require("passport-google-oauth");
// Values for Client ID should be brought from env
const port = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PORT;
const host = (_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.DB_HOST;
const clientID = ((_c = process === null || process === void 0 ? void 0 : process.env) === null || _c === void 0 ? void 0 : _c.CLIENTID) || "test";
const clientSecret = ((_d = process === null || process === void 0 ? void 0 : process.env) === null || _d === void 0 ? void 0 : _d.CLIENTSECRET) || "test";
passport_1.default.serializeUser((user, done) => done(null, user));
passport_1.default.deserializeUser((user, done) => done(null, user));
console.info("--- passport ---");
passport_1.default.use(new passport_google_oauth_1.OAuth2Strategy({
    clientID,
    clientSecret,
    callbackURL: `http://${host}:${port}/google/callback`,
    passReqToCallback: true,
}, (request, accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));
// export default passport;
