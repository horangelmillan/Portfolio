const { app } = require('./app');
// Utils
const { db } = require('./utils/database.util');

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await db.authenticate()
            .then(() => console.log('database authenticated'))

        await db.sync()
            .then(() => console.log('database synced'))
    } catch (err) {
        return console.log(err, 'something went wrong and the server could not be started', process.env.NODE_ENV === 'development');
    };

    app.listen(PORT, () => {
        console.log('server listening on port: ', PORT);
    });
};

startServer();