import { OK, INTERNAL_SERVER_ERROR } from 'http-status';
import { fetchUsers } from '../services/users';

const listUsers = function ListUsers(req, res, next) {
    const usersPromise = fetchUsers();

    usersPromise.then((users) => {
        res.status(OK);
        res.send(users);
    }).catch((error) => {
        res.sendStatus(INTERNAL_SERVER_ERROR);
    });
    return next();
};

export default { listUsers };
