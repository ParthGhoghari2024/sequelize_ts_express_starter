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
const sequelize_1 = require("sequelize");
const pino_1 = require("../utils/pino");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DIALECT = "mysql";
const DB_HOST = process.env.DB_HOST;
const sequelize = new sequelize_1.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: (log) => pino_1.logger.info(log),
});
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // sequelize.sync();
        yield sequelize.authenticate();
        console.log("Connected to the database");
    }
    catch (error) {
        console.log("failed to connect to the database");
        return process.exit(1);
    }
    return null;
});
const db = {
    sequelize: sequelize,
    connectToDatabase: connectToDatabase,
};
exports.default = db;
