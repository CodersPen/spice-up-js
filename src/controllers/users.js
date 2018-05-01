import { OK, INTERNAL_SERVER_ERROR } from 'http-status';
import Logger from '../helpers/logger';
import { fetchUsers } from '../services/users';

const listUsers = function ListUsers(req, res, next) {
    const logger = new Logger(req.headers);

    logger.info('action=listUsers description=begin');
    const usersPromise = fetchUsers(req.headers);

    usersPromise.then((users) => {
        res.status(OK);
        res.send(users);
        logger.info(`action=listUsers description=success message="${users.length} users found"`);
    }).catch((error) => {
        res.sendStatus(INTERNAL_SERVER_ERROR);
        logger.error(`action=listUsers description=error message=${error.message}`);
    });
    return next();
};

export default { listUsers };
