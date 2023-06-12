import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

export function logMiddleware(format: 'simples' | 'completo') {
    return (req: Request, res: Response, next: NextFunction) => {
        const logData = getLogData(req, format);
        const logFilePath = `${process.env.LOG_FOLDER}/${process.env.LOG_FILENAME}`;

        fs.appendFile(logFilePath, logData + '\n', (err) => {
            if (err) {
                console.error('Erro ao salvar o log:', err);
            }
        });

        next();
    };
}

function getLogData(req: Request, format: 'simples' | 'completo') {
    const timestamp = new Date().toISOString();
    const url = req.url;
    const method = req.method;

    if (format === 'simples') {
        console.log( `${timestamp} | ${url} | ${method}`);
        return `${timestamp} | ${url} | ${method}`;
    } else if (format === 'completo') {
        const httpVersion = req.httpVersion;
        const userAgent = req.get('User-Agent');
        console.log(`${timestamp} | ${url} | ${method} | ${httpVersion} | ${userAgent}`);
        return `${timestamp} | ${url} | ${method} | ${httpVersion} | ${userAgent}`;
        
    }

    return '';
}