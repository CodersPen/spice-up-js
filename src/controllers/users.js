import { OK, INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status';
import { fetchUsers, fetchUser } from '../services/users';

const listUsers = logger =>
    function ListUsers(req, res) {
        logger.info('action=listUsers description=begin');
        const usersPromise = fetchUsers(logger)(req.headers);

        usersPromise.then((users) => {
            res.status(OK);
            res.send(users);
            logger.info(`action=listUsers description=success message="${users.length} users found"`);
        }).catch((error) => {
            res.sendStatus(INTERNAL_SERVER_ERROR);
            logger.error(`action=listUsers description=error message=${error.message}`);
        });
    };

const getUser = logger =>
    function GetUser(req, res) {
        logger.info('action=getUser description=begin');
        const userPromise = fetchUser(logger)(req.params.id, req.headers);

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
