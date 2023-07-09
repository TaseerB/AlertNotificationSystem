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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeIds = exports.encodeIds = exports.sendMail = exports.somethingWentWrong = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const hashids_1 = __importDefault(require("hashids"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const password = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.PASSWORD;
const fromEmail = (_b = process === null || process === void 0 ? void 0 : process.env) === null || _b === void 0 ? void 0 : _b.FROM_EMAIL;
const secretSalt = (_c = process === null || process === void 0 ? void 0 : process.env) === null || _c === void 0 ? void 0 : _c.SECRETENCODETEXT;
const somethingWentWrong = (req, res) => {
    res.status(500).json({ message: "something went Wrong." });
    return;
};
exports.somethingWentWrong = somethingWentWrong;
const sendMail = (inputObj) => __awaiter(void 0, void 0, void 0, function* () {
    console.info({ inputObj });
    const { email, text, html, subject } = inputObj;
    let mailTransporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            user: fromEmail,
            pass: password,
        },
    });
    // Setting credentials
    let mailDetails = {
        from: fromEmail,
        to: email,
        subject: subject || "No Subject Found",
        text,
        html,
        // html,
        // 'Hello '+ name +',\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + host + '\/confirmation\/' + email + '\/' + token + '\n\nThank You!\n',
    };
    // Sending Email
    console.info("--- sending email ---");
    return mailTransporter.sendMail(mailDetails);
});
exports.sendMail = sendMail;
const encodeIds = (inpObj) => {
    console.info({ objectToEncode: inpObj });
    const hashids = new hashids_1.default(secretSalt, 5);
    if (inpObj.length > 0) {
        let objKeys = inpObj[0];
        objKeys = Object.keys(objKeys === null || objKeys === void 0 ? void 0 : objKeys.dataValues);
        // getting name of key from object
        let idKey = objKeys.filter((objKey) => {
            return objKey.includes("Id");
        });
        console.info({ key: idKey[0] });
        const getIdkey = idKey[0];
        inpObj.forEach((obj) => {
            const getValue = obj === null || obj === void 0 ? void 0 : obj.dataValues[getIdkey];
            console.info({ check: typeof getValue, getValue });
            const encodedValue = hashids.encode(getValue);
            console.info({ encodedValue });
            obj.dataValues[getIdkey] = encodedValue;
        });
    }
    else {
        let objKeys = inpObj;
        objKeys = Object.keys(objKeys === null || objKeys === void 0 ? void 0 : objKeys.dataValues);
        // getting name of key from object
        let idKey = objKeys.filter((objKey) => {
            return objKey.includes("Id");
        });
        console.info({ key: idKey[0] });
        const getIdkey = idKey[0];
        const getValue = inpObj === null || inpObj === void 0 ? void 0 : inpObj.dataValues[getIdkey];
        console.info({ check: typeof getValue, getValue });
        const encodedValue = hashids.encode(getValue);
        console.info({ encodedValue });
        inpObj.dataValues[getIdkey] = encodedValue;
    }
};
exports.encodeIds = encodeIds;
const decodeIds = (id) => {
    console.info({ idToDecode: id });
    const hashids = new hashids_1.default(secretSalt, 5);
    const getDecodedId = hashids.decode(id);
    console.info({ getDecodedId });
    return Number(getDecodedId[0]);
};
exports.decodeIds = decodeIds;
