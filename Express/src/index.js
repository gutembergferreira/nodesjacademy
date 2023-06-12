"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("./utils/validate"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("./utils/logger");
dotenv_1.default.config();
(0, validate_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
app.get('/', (0, logger_1.logMiddleware)('completo'), (req, res) => {
    res.send('Hello, World!');
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
