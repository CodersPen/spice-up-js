import { OK } from 'http-status';
import { fetchUsers } from '../services/users';

const listUsers = function ListUsers(req, res, next) {
    const usersPromise = fetchUsers();

    usersPromise.then((users) => {
        res.status(OK);
        res.send(users);
    });
    return next();
};

export default { listUsers };
