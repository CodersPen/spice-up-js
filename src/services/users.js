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

const fetchUsers = logger =>
    function FetchUsers() {
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

const fetchUser = logger =>
    function FetchUser(id) {
        return new Promise((resolve, reject) => {
            logger.info('action=fetchUser description=begin');

            const user = usersList[id - 1];

            if (user) {
                logger.info('action=fetchUser description=success');
                resolve(user);
            } else {
                logger.error(`action=fetchUser description=error message="User with ID:${id} not found"`);
                reject(new Error(`User with ID:${id} not found`));
            }
        });
    };

export default { fetchUsers, fetchUser };
