require('dotenv').config();

const jwt = require('jsonwebtoken');
const { getUserByUsername } = require('../db');
const { JWT_SECRET } = process.env;

usersRouter.post('/login', async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        next({
            name: "MissingCredentialsError",
            message: "Please supply both a username and password"
        });
    }

    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        const user = await getUserByUsername(username);

        if (user && user.password == password) {
            const token = jwt.sign({ id: user.id, username: user.username, password: user.password }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.send({ token });
            const recoveredData = jwt.verify(token, process.env.JWT_SECRET);
            recoveredData;
        } else {
            next({
                name: 'IncorrectCredentialsError',
                message: 'Username or password is incorrect'
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
});