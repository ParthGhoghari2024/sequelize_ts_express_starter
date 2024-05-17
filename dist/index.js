"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
const cors_1 = __importDefault(require("cors"));
const corsOptions = {
    origin: [],
};
app.use((0, cors_1.default)(corsOptions));
// import db from "./config/db";
// db.connectToDatabase();
app.set("view engine", "ejs");
app.use(express_1.default.static("public"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use("/user", userRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Hello ts node");
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
