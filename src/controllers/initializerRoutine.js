import Logger from '../helpers/logger';

export default function initializer(controllerFn) {
    return (req, res, next) => {
        const logger = new Logger(req.headers);
        controllerFn(logger)(req, res, next);
    };
}
