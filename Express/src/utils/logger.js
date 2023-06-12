"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function logMiddleware(format) {
    return (req, res, next) => {
        const logData = getLogData(req, format);
        const logFilePath = `${process.env.LOG_FOLDER}/${process.env.LOG_FILENAME}`;
        fs_1.default.appendFile(logFilePath, logData + '\n', (err) => {
            if (err) {
                console.error('Erro ao salvar o log:', err);
            }
        });
        next();
    };
}
exports.logMiddleware = logMiddleware;
function getLogData(req, format) {
    const timestamp = new Date().toISOString();
    const url = req.url;
    const method = req.method;
    if (format === 'simples') {
        console.log(`${timestamp} | ${url} | ${method}`);
        return `${timestamp} | ${url} | ${method}`;
    }
    else if (format === 'completo') {
        const httpVersion = req.httpVersion;
        const userAgent = req.get('User-Agent');
        console.log(`${timestamp} | ${url} | ${method} | ${httpVersion} | ${userAgent}`);
        return `${timestamp} | ${url} | ${method} | ${httpVersion} | ${userAgent}`;
    }
    return '';
}
