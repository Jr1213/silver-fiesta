"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nameMiddelware_1 = __importDefault(require("./middelware/nameMiddelware"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const port = 3001;
app.use(nameMiddelware_1.default);
app.use('/api', api_1.default);
app.listen(port, () => {
    console.log(`server is runing on http://127.0.0.1:${port}`);
});
exports.default = app;
