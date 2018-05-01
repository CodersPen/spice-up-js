import { OK, INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status';
import Logger from '../helpers/logger';
import { fetchUsers, fetchUser } from '../services/users';

const listUsers = function ListUsers(req, res) {
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
};

const getUser = function GetUser(req, res) {
    const logger = new Logger(req.headers);

    logger.info('action=getUser description=begin');
    const userPromise = fetchUser(req.params.id, req.headers);

    userPromise.then((user) => {
        res.status(OK);
        res.send(user);
        logger.info(`action=getUser description=success message="User with ID:${req.params.id} found"`);
    }).catch((error) => {
        logger.error(`action=getUser description=error message="${error.message}"`);
        res.sendStatus(NOT_FOUND);
    });
};

export default { listUsers, getUser };
