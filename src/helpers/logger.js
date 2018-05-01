import winston from 'winston';
import os from 'os';

const levels = { fatal: 0, error: 0, warning: 1, info: 2, trace: 3, debug: 4 };
const timestamp = () => new Date().toJSON().replace(/T/, ' ').replace(/Z/, '');

const expandHeaders = headers => `, xUserId="${headers['x-user-id']}", xRequestId="${headers['x-request-id']}"`;

const formatter = headers => options =>
    `${options.timestamp()} level=${options.level.toUpperCase()}, cid=${os.hostname()}` +
    `${headers !== undefined ? expandHeaders(headers) : ''}` +
    `${(undefined !== options.message ? `, ${options.message}` : '')}`;

export default class Logger {
    constructor(headers) {
        return new (winston.Logger)({
            levels,
            transports: [
                new (winston.transports.Console)({
                    timestamp,
                    formatter: formatter(headers),
                    level: 'debug'
                })
            ]
        });
    }
}
