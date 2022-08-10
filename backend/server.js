const { app } = require('./app');
// Utils
const { db } = require('./utils/database.util');

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    await db.authenticate()
        .then(() => console.log('database authenticated'))
        .catch(err => console.log(err))

    await db.sync()
        .then(() => console.log('database synced'))
        .catch(err => console.log(err))

    app.listen(PORT, () => {
        console.log('server listening on port: ', PORT);
    });
};

startServer();