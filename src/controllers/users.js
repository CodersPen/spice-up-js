import { OK } from 'http-status';

const usersIndex = function UsersIndex(req, res, next) {
    res.status(OK);
    res.send([
        { name: 'Leonardo' },
        { name: 'Carlos' }
    ]);
    return next();
};

export default { usersIndex };
