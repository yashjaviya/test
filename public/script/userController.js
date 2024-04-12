let users = [
    {
        id: 1,
        username: 'test',
        password: 'test'
    }, {
        id: 2,
        username: 'test2',
        password: 'test2'
    }
];

const getAllUser = (req, res) => {
    res.json(users);
}

const login = (req, res) => {
    const reqBody = req.body;
    const user = users.find(u => (reqBody.username === u.username && reqBody.password === u.password));

    if (!user) {
        res.json({
            status: false,
            message: 'User not found'
        });

        return;
    }

    res.json({
        status: true,
        user
    });
}

const register = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.json({
            status: false,
            key: 1,
            message: 'Username and password are required'
        });

        return;
    }

    const findUser = users.find(u => username === u.username);

    if (findUser) {
        res.json({
            status: false,
            key: 2,
            message: 'Username must be unique'
        });

        return;
    }

    users.push({
        id: users && users.length ? users.length + 1 : 1,
        username,
        password,
    });

    res.json({
        status: true,
        message: 'Successfully register'
    });
}

module.exports = {
    getAllUser,
    login,
    register,
}