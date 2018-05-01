import Logger from '../helpers/logger';

const usersList = [
    { name: 'Leonardo' },
    { name: 'Carlos' },
    { name: 'Diana' },
    { name: 'Andrés' },
    { name: 'Julia' },
    { name: 'Camilo' },
    { name: 'Daniel' },
    { name: 'Damián' },
    { name: 'Danilo' },
    { name: 'Jaime' },
    { name: 'Constanza' },
    { name: 'Carla' }
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
        const user = usersList[id - 1];

        if (user) {
            resolve(user);
        }
        reject(new Error(`User with id ${id} not found`));
    });
};

export default { fetchUsers, fetchUser };
