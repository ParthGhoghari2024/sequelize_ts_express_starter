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
exports.deleteUserController = exports.createUserController = exports.getAllUserController = void 0;
// import { userModel, UserAttributes } from "../models/userModel";
const models_1 = __importDefault(require("../models"));
const getAllUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield models_1.default.UserModel.findAll();
        res.json({ success: 1, result: users });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllUserController = getAllUserController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const newUser: UserAttributes = {
        const newUser = {
            name: req.body.name,
            email: req.body.email,
        };
        yield models_1.default.UserModel.create(newUser);
        return res.json({ success: 1 });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createUserController = createUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.userId;
        const deleteUserResult = yield models_1.default.UserModel.destroy({
            where: {
                id: userId,
            },
        });
        // console.log(deleteUserResult);
        res.json({ success: 1 });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteUserController = deleteUserController;
