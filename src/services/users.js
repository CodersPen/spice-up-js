import Logger from '../helpers/logger';

const usersList = [
    { name: 'Leonardo' },
    { name: 'Carlos' }
];

const fetchUsers = function FetchUsers(headers) {
    const logger = new Logger(headers);

    logger.info('action=fetchUsers description=begin');

    const users = Promise.resolve(usersList);

    users.then(() => {
        logger.info('action=fetchUsers description=success');
    });

    users.catch((error) => {
        logger.error(`action=fetchUsers description=error message=${error.message}`);
    });

    return users;
};

const fetchUser = function FetchUser(id) {
    return new Promise((resolve, reject) => {
        const user = usersList[id];

        if (user) {
            resolve(user);
        }
        reject(new Error(`User with id ${id} not found`));
    });
};

export default { fetchUsers, fetchUser };
