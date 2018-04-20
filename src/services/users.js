const usersList = [
    { name: 'Leonardo' },
    { name: 'Carlos' }
];

const fetchUsers = function FetchUsers() {
    return Promise.resolve(usersList);
}

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
